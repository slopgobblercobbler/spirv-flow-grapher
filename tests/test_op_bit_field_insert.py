import json
import os
import unittest

class TestOpBitFieldInsert(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'spirv_op_bit_field_insert.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_bit_field_insert(self):
        self.assertEqual(self.data['opcode_id'], 201)
        self.assertEqual(self.data['count_operand_index'], 5)

if __name__ == '__main__':
    unittest.main()
