import json
import os
import unittest

class TestOpSelect(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'spirv_op_select.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_select(self):
        self.assertEqual(self.data['opcode_id'], 169)
        self.assertEqual(self.data['condition_operand_index'], 2)

if __name__ == '__main__':
    unittest.main()
