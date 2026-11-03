# SPIR-V Control Flow Grapher

🚀 **Live Demo:** [https://slopgobblercobbler.github.io/spirv-flow-grapher/](https://slopgobblercobbler.github.io/spirv-flow-grapher/)

A high-utility, client-side interactive web application for parsing SPIR-V binaries and disassembly, building and visualizing Control Flow Graphs (CFGs), and inspecting basic blocks in real time.

![SPIR-V Flow Grapher Screenshot](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80)

---

## Features

- **Client-Side Parser:** Instantly parses SPIR-V disassembly text, handling basic blocks (`OpLabel`), conditional branches (`OpBranchConditional`), unconditional jumps (`OpBranch`), selection merges (`OpSelectionMerge`), loop merges (`OpLoopMerge`), and SSA phi nodes (`OpPhi`).
- **Interactive SVG CFG Visualizer:** Zoom, pan, and relayout control flow nodes with color-coded edge types (True branches, False branches, loop backedges, and merge fallthroughs).
- **Basic Block Inspector:** Click any basic block in the graph to inspect its full instruction list, predecessor/successor links, and merge attributes.
- **Built-in Sample Shaders:** Quick-start with pre-loaded Vertex, Fragment, and Compute shader presets.
- **Zero-Dependency Architecture:** Pure HTML5, Tailwind CSS, and vanilla JavaScript running entirely client-side.

---

## Getting Started

Clone the repository and open `index.html` in any modern web browser:

```bash
git clone https://github.com/slopgobblercobbler/spirv-flow-grapher.git
cd spirv-flow-grapher
# Open index.html or serve locally
python -m http.server 8080
```

---

## License

Distributed under the MIT License. See `LICENSE` for more information.
