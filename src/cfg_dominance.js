// Dominance Tree & Immediate Dominator (IDom) Calculator for SPIR-V CFG
export class DominanceCalculator {
    constructor(blocks, entryId) {
        this.blocks = blocks; // Map<id, { successors: [], predecessors: [] }>
        this.entryId = entryId;
    }

    computeDominators() {
        const dom = new Map();
        const allIds = Array.from(this.blocks.keys());

        for (const id of allIds) {
            if (id === this.entryId) {
                dom.set(id, new Set([id]));
            } else {
                dom.set(id, new Set(allIds));
            }
        }

        let changed = true;
        while (changed) {
            changed = false;
            for (const id of allIds) {
                if (id === this.entryId) continue;

                const preds = this.blocks.get(id)?.predecessors || [];
                if (preds.length === 0) continue;

                let newDom = new Set(dom.get(preds[0]) || []);
                for (let i = 1; i < preds.length; i++) {
                    const pDom = dom.get(preds[i]) || new Set();
                    newDom = new Set([...newDom].filter(x => pDom.has(x)));
                }
                newDom.add(id);

                const currentDom = dom.get(id);
                if (newDom.size !== currentDom.size || ![...newDom].every(x => currentDom.has(x))) {
                    dom.set(id, newDom);
                    changed = true;
                }
            }
        }
        return dom;
    }
}
