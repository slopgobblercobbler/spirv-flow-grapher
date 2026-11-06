import json
import os
import unittest

class TestOpAtomicIAdd(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'spirv_op_atomic_iadd.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_atomic(self):
        self.assertEqual(self.data['opcode_id'], 227)
        self.assertTrue(self.data['has_result'])

if __name__ == '__main__':
    unittest.main()
