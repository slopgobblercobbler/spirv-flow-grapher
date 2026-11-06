import json
import os
import unittest

class TestOpIsNan(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'spirv_op_is_nan.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_nan(self):
        self.assertEqual(self.data['opcode_id'], 156)
        self.assertTrue(self.data['requires_float'])

if __name__ == '__main__':
    unittest.main()
