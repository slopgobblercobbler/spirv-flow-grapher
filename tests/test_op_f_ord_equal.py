import json
import os
import unittest

class TestOpFOrdEqual(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'spirv_op_f_ord_equal.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_f_ord(self):
        self.assertEqual(self.data['opcode_id'], 180)
        self.assertTrue(self.data['ordered'])

if __name__ == '__main__':
    unittest.main()
