import json
import os
import unittest

class TestOpULessThan(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'spirv_op_u_less_than.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_u_less_than(self):
        self.assertEqual(self.data['opcode_id'], 170)
        self.assertTrue(self.data['unsigned_comparison'])

if __name__ == '__main__':
    unittest.main()
