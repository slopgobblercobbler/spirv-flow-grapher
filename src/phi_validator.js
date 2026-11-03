// SPIR-V OpPhi Node Predecessor Completeness Validator
export class PhiValidator {
    static validate(phiNode, blockPredecessors) {
        const phiPreds = phiNode.incomings.map(inc => inc.parentBlockId);
        for (const pred of blockPredecessors) {
            if (!phiPreds.includes(pred)) {
                return { valid: false, missingPredecessor: pred };
            }
        }
        return { valid: true };
    }
}
