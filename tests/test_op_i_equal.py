import json
import os
import unittest

class TestOpIEqual(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'spirv_op_i_equal.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_i_equal(self):
        self.assertEqual(self.data['opcode_id'], 166)
        self.assertTrue(self.data['has_result'])

if __name__ == '__main__':
    unittest.main()
