import assert from 'assert';
import caps from '../src/capabilities.json' assert { type: 'json' };

describe('SPIR-V Capabilities', () => {
    it('should have Matrix capability mapped to 0', () => {
        assert.strictEqual(caps.Matrix, 0);
    });
    it('should have Shader capability mapped to 1', () => {
        assert.strictEqual(caps.Shader, 1);
    });
});
