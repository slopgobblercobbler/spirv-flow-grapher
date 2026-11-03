import assert from 'assert';
import opcodes from '../src/branch_opcodes.json' assert { type: 'json' };

describe('SPIR-V Branch Opcodes', () => {
    it('should map OpBranch to opcode 249', () => {
        assert.strictEqual(opcodes.OpBranch.opcode, 249);
    });

    it('should identify conditional branches properly', () => {
        assert.strictEqual(opcodes.OpBranchConditional.hasCondition, true);
        assert.strictEqual(opcodes.OpBranch.hasCondition, false);
    });
});
