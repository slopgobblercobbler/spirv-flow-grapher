import json
import os
import unittest

class TestMatrixTranspose(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'spirv_matrix_transpose_op.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_op(self):
        self.assertEqual(self.data['opcode_id'], 84)
        self.assertIn("4x4", self.data['supported_dims'])

if __name__ == '__main__':
    unittest.main()
