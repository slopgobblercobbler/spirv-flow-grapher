import json
import os
import unittest

class TestOpCopyMemory(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'spirv_op_copy_memory.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_op(self):
        self.assertEqual(self.data['opcode_id'], 63)
        self.assertTrue(self.data['supports_dual_memory_operands'])

if __name__ == '__main__':
    unittest.main()
