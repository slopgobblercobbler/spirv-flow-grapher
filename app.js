/**
 * SPIR-V Control Flow Grapher & Disassembly Parser
 * Supports OpLabel, OpBranch, OpBranchConditional, OpSelectionMerge, OpLoopMerge, and OpPhi.
 */

// Sample Shader Presets
const SAMPLE_SHADERS = {
    vertex: `; SPIR-V Vertex Shader Sample with Selection Merge & Conditional Branch
OpCapability Shader
OpMemoryModel Logical GLSL450
OpEntryPoint Vertex %main "main" %pos
OpName %main "main"
OpName %bb_entry "entry"
OpName %bb_true "true_branch"
OpName %bb_false "false_branch"
OpName %bb_merge "merge_block"

%void = OpTypeVoid
%bool = OpTypeBool
%float = OpTypeFloat 32
%int = OpTypeInt 32 1

%main = OpFunction %void None %void
%bb_entry = OpLabel
%cond = OpLoad %bool %in_cond
OpSelectionMerge %bb_merge None
OpBranchConditional %cond %bb_true %bb_false

%bb_true = OpLabel
%val_true = OpConstant %int 42
OpBranch %bb_merge

%bb_false = OpLabel
%val_false = OpConstant %int 1337
OpBranch %bb_merge

%bb_merge = OpLabel
%phi_res = OpPhi %int %val_true %bb_true %val_false %bb_false
OpReturn
OpFunctionEnd`,

    fragment: `; SPIR-V Fragment Shader Sample with Discard & Early Exit
OpCapability Shader
OpMemoryModel Logical GLSL450
OpEntryPoint Fragment %main "main"
OpName %main "main"
OpName %bb_entry "entry"
OpName %bb_discard "discard_block"
OpName %bb_keep "keep_block"

%void = OpTypeVoid
%bool = OpTypeBool

%main = OpFunction %void None %void
%bb_entry = OpLabel
%should_discard = OpLoad %bool %discard_flag
OpSelectionMerge %bb_keep None
OpBranchConditional %should_discard %bb_discard %bb_keep

%bb_discard = OpLabel
OpKill

%bb_keep = OpLabel
%color = OpConstant %float 1.0
OpReturn
OpFunctionEnd`,

    compute: `; SPIR-V Compute Shader Sample with Loop Merge & Backedge
OpCapability Shader
OpMemoryModel Logical GLSL450
OpEntryPoint Compute %main "main"
OpName %main "main"
OpName %bb_entry "entry"
OpName %bb_header "loop_header"
OpName %bb_body "loop_body"
OpName %bb_continue "loop_continue"
OpName %bb_merge "loop_merge"

%void = OpTypeVoid
%bool = OpTypeBool
%int = OpTypeInt 32 1

%main = OpFunction %void None %void
%bb_entry = OpLabel
OpBranch %bb_header

%bb_header = OpLabel
%i = OpPhi %int %zero %bb_entry %i_next %bb_continue
%loop_cond = OpSLessThan %bool %i %limit
OpLoopMerge %bb_merge %bb_continue None
OpBranchConditional %loop_cond %bb_body %bb_merge

%bb_body = OpLabel
OpStore %out_buf %i
OpBranch %bb_continue

%bb_continue = OpLabel
%i_next = OpIAdd %int %i %one
OpBranch %bb_header

%bb_merge = OpLabel
OpReturn
OpFunctionEnd`
};

// Global State
let parsedCFG = { blocks: [], edges: [] };
let selectedBlockId = null;
let currentZoom = 1;
let panX = 0;
let panY = 0;
let isDraggingCanvas = false;
let startX = 0;
let startY = 0;

// Initialize on Load
window.addEventListener('DOMContentLoaded', () => {
    loadSample('vertex');
    setupCanvasInteractions();
    setupFileInput();
});

function loadSample(type) {
    const code = SAMPLE_SHADERS[type] || SAMPLE_SHADERS['vertex'];
    document.getElementById('sourceEditor').value = code;
    compileAndRender();
}

function setupFileInput() {
    const fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
            document.getElementById('sourceEditor').value = evt.target.result;
            compileAndRender();
        };
        reader.readAsText(file);
    });
}

/**
 * SPIR-V Disassembly Parser & CFG Builder
 */
function compileAndRender() {
    const sourceText = document.getElementById('sourceEditor').value;
    try {
        parsedCFG = parseSPIRVDisassembly(sourceText);
        updateStats();
        renderGraph();
        
        // Select first block by default if available
        if (parsedCFG.blocks.length > 0) {
            selectBlock(parsedCFG.blocks[0].id);
        } else {
            selectedBlockId = null;
            document.getElementById('inspectBlockId').textContent = 'No selection';
            document.getElementById('inspectorContent.innerHTML').innerHTML = `
                <div class="text-center py-16 text-gray-500">
                    <i data-lucide="alert-circle" class="w-8 h-8 mx-auto mb-2 text-amber-500"></i>
                    <p class="text-sm">No valid basic blocks (%label = OpLabel) detected.</p>
                </div>
            `;
        }
    } catch (err) {
        console.error('Parser Error:', err);
        alert('Error parsing SPIR-V disassembly: ' + err.message);
    }
}

function parseSPIRVDisassembly(text) {
    const lines = text.split('\n');
    let blocksMap = new Map(); // label -> Block object
    let currentBlock = null;
    let labelNames = new Map(); // %id -> name string
    let phiCount = 0;

    // First pass: collect OpName mappings
    for (let line of lines) {
        line = line.trim();
        if (line.startsWith('OpName')) {
            const parts = line.split(/\s+/);
            if (parts.length >= 3) {
                const targetId = parts[1];
                const nameStr = parts.slice(2).join(' ').replace(/^"|"$/g, '');
                labelNames.set(targetId, nameStr);
            }
        }
    }

    // Second pass: Parse blocks and instructions
    for (let rawLine of lines) {
        let line = rawLine.trim();
        if (!line || line.startsWith(';')) continue;

        // Check for OpLabel
        // e.g. %bb_entry = OpLabel or 12 = OpLabel
        if (line.includes('OpLabel')) {
            const parts = line.split(/\s*=\s*/);
            let labelId = parts[0].trim();
            let actualName = labelNames.get(labelId) || labelId;

            currentBlock = {
                id: labelId,
                name: actualName,
                instructions: [line],
                terminator: null,
                selectionMerge: null,
                loopMerge: null,
                phis: [],
                successors: [],
                predecessors: []
            };
            blocksMap.set(labelId, currentBlock);
            continue;
        }

        if (currentBlock) {
            currentBlock.instructions.push(line);

            // Check for OpPhi
            if (line.includes('OpPhi')) {
                phiCount++;
                currentBlock.phis.push(line);
            }

            // Check for control flow merge instructions
            if (line.includes('OpSelectionMerge')) {
                const parts = line.split(/\s+/);
                // e.g. OpSelectionMerge %bb_merge None
                for (let p of parts) {
                    if (p.startsWith('%')) {
                        currentBlock.selectionMerge = p;
                        break;
                    }
                }
            } else if (line.includes('OpLoopMerge')) {
                const parts = line.split(/\s+/);
                // e.g. OpLoopMerge %bb_merge %bb_continue None
                let targets = parts.filter(p => p.startsWith('%'));
                if (targets.length >= 1) currentBlock.loopMerge = targets[0];
                if (targets.length >= 2) currentBlock.loopContinue = targets[1];
            }

            // Check for terminators: OpBranch, OpBranchConditional, OpReturn, OpKill, OpUnreachable
            if (line.startsWith('OpBranch ') || line.startsWith('OpBranchConditional') || 
                line.startsWith('OpReturn') || line.startsWith('OpReturnValue') || 
                line.startsWith('OpKill') || line.startsWith('OpUnreachable')) {
                
                currentBlock.terminator = line;
                
                // Extract targets
                const parts = line.split(/\s+/);
                for (let i = 1; i < parts.length; i++) {
                    let token = parts[i];
                    if (token.startsWith('%')) {
                        currentBlock.successors.push({
                            target: token,
                            type: line.startsWith('OpBranchConditional') ? (i === 2 ? 'true' : (i === 3 ? 'false' : 'normal')) : 'normal'
                        });
                    }
                }
            }
        }
    }

    let blocks = Array.from(blocksMap.values());

    // Build edges and establish predecessor lists
    let edges = [];
    let edgeSet = new Set();

    for (let block of blocks) {
        // If block has a selectionMerge or loopMerge, ensure edge to merge target
        if (block.selectionMerge && blocksMap.has(block.selectionMerge)) {
            // Check if edge already exists
            addUniqueEdge(block.id, block.selectionMerge, 'merge', edges, edgeSet, blocksMap);
        }
        if (block.loopMerge && blocksMap.has(block.loopMerge)) {
            addUniqueEdge(block.id, block.loopMerge, 'merge', edges, edgeSet, blocksMap);
        }
        if (block.loopContinue && blocksMap.has(block.loopContinue)) {
            addUniqueEdge(block.id, block.loopContinue, 'loop', edges, edgeSet, blocksMap);
        }

        for (let succ of block.successors) {
            if (blocksMap.has(succ.target)) {
                let edgeType = succ.type;
                // Detect backedge for loops
                if (block.loopContinue === succ.target || (block.id === succ.target)) {
                    edgeType = 'loop';
                }
                addUniqueEdge(block.id, succ.target, edgeType, edges, edgeSet, blocksMap);
            }
        }
    }

    // Implicit fallthrough between consecutive blocks if no explicit terminator
    for (let i = 0; i < blocks.length - 1; i++) {
        let b = blocks[i];
        if (!b.terminator || b.terminator.startsWith('OpSelectionMerge') || b.terminator.startsWith('OpLoopMerge')) {
            let nextB = blocks[i + 1];
            // If not already connected
            addUniqueEdge(b.id, nextB.id, 'fallthrough', edges, edgeSet, blocksMap);
        }
    }

    return { blocks, edges, phiCount };
}

function addUniqueEdge(source, target, type, edges, edgeSet, blocksMap) {
    let key = `${source}->${target}`;
    if (!edgeSet.has(key) && source !== target) {
        edgeSet.add(key);
        edges.push({ source, target, type });

        // Register predecessor
        let targetBlock = blocksMap.get(target);
        let sourceBlock = blocksMap.get(source);
        if (targetBlock && sourceBlock) {
            if (!targetBlock.predecessors.includes(source)) {
                targetBlock.predecessors.push(source);
            }
        }
    }
}

function updateStats() {
    document.getElementById('statBlocks').textContent = parsedCFG.blocks.length;
    document.getElementById('statEdges').textContent = parsedCFG.edges.length;
    document.getElementById('statPhis').textContent = parsedCFG.phiCount;
}

/**
 * Interactive SVG Control Flow Graph Visualizer & Layout Engine
 */
function renderGraph() {
    const svg = document.getElementById('cfgSvg');
    const nodesLayer = document.getElementById('nodesLayer');
    const edgesLayer = document.getElementById('edgesLayer');

    nodesLayer.innerHTML = '';
    edgesLayer.innerHTML = '';

    if (parsedCFG.blocks.length === 0) return;

    // Simple Sugiyama-style layered topological layout
    let levels = computeBlockLevels(parsedCFG.blocks, parsedCFG.edges);
    
    let blockPositions = new Map();
    let nodeWidth = 260;
    let nodeHeightBase = 80;
    let levelHeight = 180;
    let horizontalSpacing = 320;

    levels.forEach((levelBlocks, levelIdx) => {
        let rowWidth = levelBlocks.length * horizontalSpacing;
        let startXCoord = -rowWidth / 2 + horizontalSpacing / 2;

        levelBlocks.forEach((block, idx) => {
            let x = startXCoord + idx * horizontalSpacing;
            let y = levelIdx * levelHeight + 60;
            let h = nodeHeightBase + Math.min(block.instructions.length * 16, 120);

            blockPositions.set(block.id, { x, y, width: nodeWidth, height: h });
        });
    });

    // Render Edges
    parsedCFG.edges.forEach(edge => {
        let srcPos = blockPositions.get(edge.source);
        let tgtPos = blockPositions.get(edge.target);
        if (!srcPos || !tgtPos) return;

        let x1 = srcPos.x;
        let y1 = srcPos.y + srcPos.height / 2;
        let x2 = tgtPos.x;
        let y2 = tgtPos.y - tgtPos.height / 2;

        let strokeColor = '#4b5563'; // normal
        let markerId = 'arrow-normal';
        let strokeDash = '';

        if (edge.type === 'true') {
            strokeColor = '#10b981';
            markerId = 'arrow-true';
        } else if (edge.type === 'false') {
            strokeColor = '#ef4444';
            markerId = 'arrow-false';
        } else if (edge.type === 'loop' || edge.type === 'backedge') {
            strokeColor = '#f59e0b';
            markerId = 'arrow-loop';
            strokeDash = 'stroke-dasharray="4,4"';
        } else if (edge.type === 'merge') {
            strokeColor = '#3b82f6';
            markerId = 'arrow-true';
        }

        // Draw cubic bezier curve
        let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        let dy = Math.abs(y2 - y1) * 0.5;
        let d = `M ${x1} ${y1} C ${x1} ${y1 + dy}, ${x2} ${y2 - dy}, ${x2} ${y2}`;
        
        path.setAttribute('d', d);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', strokeColor);
        path.setAttribute('stroke-width', '2');
        path.setAttribute('marker-end', `url(#${markerId})`);
        if (strokeDash) path.setAttribute('stroke-dasharray', '4,4');
        path.classList.add('transition-all', 'duration-150');

        edgesLayer.appendChild(path);
    });

    // Render Nodes
    parsedCFG.blocks.forEach(block => {
        let pos = blockPositions.get(block.id);
        if (!pos) return;

        let g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('transform', `translate(${pos.x - pos.width / 2}, ${pos.y - pos.height / 2})`);
        g.classList.add('block-node');
        if (block.id === selectedBlockId) g.classList.add('selected');

        g.addEventListener('click', () => {
            selectBlock(block.id);
        });

        // Background rect
        let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('width', pos.width);
        rect.setAttribute('height', pos.height);
        rect.setAttribute('rx', '8');
        rect.setAttribute('fill', '#1f2937');
        rect.setAttribute('stroke', '#374151');
        rect.setAttribute('stroke-width', '1.5');
        rect.classList.add('bg-rect');
        g.appendChild(rect);

        // Header banner rect
        let headerRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        headerRect.setAttribute('width', pos.width);
        headerRect.setAttribute('height', '32');
        headerRect.setAttribute('rx', '8');
        headerRect.setAttribute('fill', '#111827');
        g.appendChild(headerRect);

        // Clip bottom corners of header
        let clipFix = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        clipFix.setAttribute('y', '16');
        clipFix.setAttribute('width', pos.width);
        clipFix.setAttribute('height', '16');
        clipFix.setAttribute('fill', '#111827');
        g.appendChild(clipFix);

        // Header divider line
        let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', '0');
        line.setAttribute('y1', '32');
        line.setAttribute('x2', pos.width);
        line.setAttribute('y2', '32');
        line.setAttribute('stroke', '#374151');
        line.setAttribute('stroke-width', '1');
        g.appendChild(line);

        // Label text (Block name)
        let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', '14');
        text.setAttribute('y', '21');
        text.setAttribute('fill', '#93c5fd');
        text.setAttribute('font-family', 'monospace');
        text.setAttribute('font-size', '12');
        text.setAttribute('font-weight', 'bold');
        text.textContent = `%${block.name}`;
        g.appendChild(text);

        // Instruction preview inside node
        let previewGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        previewGroup.setAttribute('transform', 'translate(14, 48)');
        
        let maxLines = Math.floor((pos.height - 50) / 16);
        let instsToDisplay = block.instructions.slice(0, maxLines);

        instsToDisplay.forEach((inst, idx) => {
            let t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            t.setAttribute('y', idx * 16);
            t.setAttribute('fill', '#9ca3af');
            t.setAttribute('font-family', 'monospace');
            t.setAttribute('font-size', '10');
            // Truncate long instructions
            t.textContent = inst.length > 38 ? inst.substring(0, 36) + '...' : inst;
            previewGroup.appendChild(t);
        });

        g.appendChild(previewGroup);
        nodesLayer.appendChild(g);
    });

    updateViewportTransform();
}

function computeBlockLevels(blocks, edges) {
    let inDegree = new Map();
    let adj = new Map();

    blocks.forEach(b => {
        inDegree.set(b.id, 0);
        adj.set(b.id, []);
    });

    edges.forEach(e => {
        if (adj.has(e.source)) {
            adj.get(e.source).push(e.target);
        }
        if (inDegree.has(e.target)) {
            inDegree.set(e.target, inDegree.get(e.target) + 1);
        }
    });

    // Topological sorting into levels (BFS Kahn's algorithm variant)
    let levels = [];
    let queue = blocks.filter(b => inDegree.get(b.id) === 0);
    if (queue.length === 0 && blocks.length > 0) {
        queue = [blocks[0]]; // fallback if circular
    }

    let visited = new Set();

    while (queue.length > 0) {
        let currentLevel = [...queue];
        levels.push(currentLevel);
        queue = [];

        for (let b of currentLevel) {
            visited.add(b.id);
            let neighbors = adj.get(b.id) || [];
            for (let nId of neighbors) {
                inDegree.set(nId, inDegree.get(nId) - 1);
                if (inDegree.get(nId) <= 0 && !visited.has(nId)) {
                    let nBlock = blocks.find(x => x.id === nId);
                    if (nBlock && !queue.includes(nBlock) && !currentLevel.includes(nBlock)) {
                        queue.push(nBlock);
                    }
                }
            }
        }

        // Catch any unvisited blocks for complete coverage
        if (queue.length === 0) {
            let unvisited = blocks.filter(b => !visited.has(b.id));
            if (unvisited.length > 0) {
                queue.push(unvisited[0]);
            }
        }
    }

    return levels;
}

/**
  * Inspector Panel & Selection Handler
  */
function selectBlock(blockId) {
    selectedBlockId = blockId;
    
    // Highlight node in SVG
    document.querySelectorAll('.block-node').forEach(el => el.classList.remove('selected'));
    // Find matching node and add selected class
    // We can re-render to update selection class cleanly
    renderGraph();

    let block = parsedCFG.blocks.find(b => b.id === blockId);
    if (!block) return;

    document.getElementById('inspectBlockId').textContent = `%${block.name}`;

    let html = `
        <div class="space-y-4">
            <div>
                <h3 class="text-xs font-semibold text-gray-400 uppercase mb-2">Block Attributes</h3>
                <div class="bg-dark-900 rounded-lg p-3 border border-dark-700 space-y-2 text-xs font-mono">
                    <div class="flex justify-between"><span class="text-gray-500">ID:</span> <span class="text-white">${block.id}</span></div>
                    <div class="flex justify-between"><span class="text-gray-500">Name:</span> <span class="text-blue-400">%${block.name}</span></div>
                    <div class="flex justify-between"><span class="text-gray-500">Terminator:</span> <span class="text-amber-400">${block.terminator || 'None (Fallthrough)'}</span></div>
                    ${block.selectionMerge ? `<div class="flex justify-between"><span class="text-gray-500">Selection Merge:</span> <span class="text-purple-400">${block.selectionMerge}</span></div>` : ''}
                    ${block.loopMerge ? `<div class="flex justify-between"><span class="text-gray-500">Loop Merge:</span> <span class="text-purple-400">${block.loopMerge}</span></div>` : ''}
                    ${block.loopContinue ? `<div class="flex justify-between"><span class="text-gray-500">Loop Continue:</span> <span class="text-cyan-400">${block.loopContinue}</span></div>` : ''}
                </div>
            </div>

            <div>
                <h3 class="text-xs font-semibold text-gray-400 uppercase mb-2">Predecessors (${block.predecessors.length})</h3>
                <div class="flex flex-wrap gap-1.5">
                    ${block.predecessors.length > 0 ? block.predecessors.map(pId => {
                        let pBlock = parsedCFG.blocks.find(b => b.id === pId);
                        return `<button onclick="selectBlock('${pId}')" class="px-2 py-1 bg-dark-900 hover:bg-dark-700 border border-dark-700 text-gray-300 rounded font-mono text-xs transition">%${pBlock ? pBlock.name : pId}</button>`;
                    }).join('') : '<span class="text-gray-500 text-xs italic">None (Entry Block)</span>'}
                </div>
            </div>

            <div>
                <h3 class="text-xs font-semibold text-gray-400 uppercase mb-2">Successors (${block.successors.length})</h3>
                <div class="flex flex-wrap gap-1.5">
                    ${block.successors.length > 0 ? block.successors.map(s => {
                        let sBlock = parsedCFG.blocks.find(b => b.id === s.target);
                        let badgeColor = s.type === 'true' ? 'border-emerald-600/50 text-emerald-300' : (s.type === 'false' ? 'border-rose-600/50 text-rose-300' : 'border-dark-600 text-gray-300');
                        return `<button onclick="selectBlock('${s.target}')" class="px-2 py-1 bg-dark-900 hover:bg-dark-700 border ${badgeColor} rounded font-mono text-xs transition flex items-center gap-1"><span>%${sBlock ? sBlock.name : s.target}</span><span class="text-[9px] opacity-70">(${s.type})</span></button>`;
                    }).join('') : '<span class="text-gray-500 text-xs italic">None (Exit Block)</span>'}
                </div>
            </div>

            <div>
                <h3 class="text-xs font-semibold text-gray-400 uppercase mb-2">Instructions (${block.instructions.length})</h3>
                <div class="bg-dark-900 rounded-lg p-3 border border-dark-700 font-mono text-xs space-y-1 overflow-x-auto">
                    ${block.instructions.map(inst => `<div class="text-gray-300 whitespace-nowrap">${escapeHtml(inst)}</div>`).join('')}
                </div>
            </div>
        </div>
    `;

    document.getElementById('inspectorContent').innerHTML = html;
}

function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * Canvas Zoom & Pan Interactions
 */
function setupCanvasInteractions() {
    const svg = document.getElementById('cfgSvg');

    svg.addEventListener('mousedown', (e) => {
        if (e.target.tagName === 'svg' || e.target.id === 'viewport') {
            isDraggingCanvas = true;
            startX = e.clientX - panX;
            startY = e.clientY - panY;
            svg.classList.add('cursor-grabbing');
        }
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDraggingCanvas) return;
        panX = e.clientX - startX;
        panY = e.clientY - startY;
        updateViewportTransform();
    });

    window.addEventListener('mouseup', () => {
        isDraggingCanvas = false;
        svg.classList.remove('cursor-grabbing');
    });

    svg.addEventListener('wheel', (e) => {
        e.preventDefault();
        const zoomFactor = 1.1;
        if (e.deltaY < 0) {
            currentZoom *= zoomFactor;
        } else {
            currentZoom /= zoomFactor;
        }
        currentZoom = Math.max(0.2, Math.min(4, currentZoom));
        updateViewportTransform();
    }, { passive: false });
}

function updateViewportTransform() {
    const viewport = document.getElementById('viewport');
    const svg = document.getElementById('cfgSvg');
    const centerX = svg.clientWidth / 2;
    const centerY = 80;
    viewport.setAttribute('transform', `translate(${centerX + panX}, ${50 + panY}) scale(${currentZoom})`);
}

function zoomIn() {
    currentZoom = Math.min(4, currentZoom * 1.2);
    updateViewportTransform();
}

function zoomOut() {
    currentZoom = Math.max(0.2, currentZoom / 1.2);
    updateViewportTransform();
}

function resetZoom() {
    currentZoom = 1;
    panX = 0;
    panY = 0;
    updateViewportTransform();
}

function autoLayout() {
    resetZoom();
    compileAndRender();
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleIcon = document.getElementById('toggleIcon');
    const toggleBtn = document.getElementById('toggleSidebar');

    if (sidebar.classList.contains('w-[420px]')) {
        sidebar.classList.remove('w-[420px]');
        sidebar.classList.add('w-0', 'overflow-hidden');
        toggleBtn.style.left = '0px';
        toggleIcon.style.transform = 'rotate(180deg)';
    } else {
        sidebar.classList.remove('w-0', 'overflow-hidden');
        sidebar.classList.add('w-[420px]');
        toggleBtn.style.left = '420px';
        toggleIcon.style.transform = 'rotate(0deg)';
    }
}
