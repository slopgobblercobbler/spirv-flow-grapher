import json
import os
import unittest

class TestSpirvAtomicOps(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'spirv_op_atomic_ops.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_atomic_opcodes(self):
        self.assertEqual(self.data['OpAtomicLoad'], 227)
        self.assertEqual(self.data['OpAtomicStore'], 228)
        self.assertEqual(self.data['OpAtomicCompareExchange'], 230)

if __name__ == '__main__':
    unittest.main()
