import json
import os
import unittest

class TestOpSLessThan(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'spirv_op_s_less_than.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_s_less_than(self):
        self.assertEqual(self.data['opcode_id'], 176)
        self.assertTrue(self.data['signed_comparison'])

if __name__ == '__main__':
    unittest.main()
