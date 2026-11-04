import json
import os
import unittest

class TestGlslMatrixOpcodes(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'glsl_std_450_matrix_opcodes.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_opcodes(self):
        self.assertEqual(self.data['Determinant'], 41)
        self.assertEqual(self.data['MatrixInverse'], 42)

if __name__ == '__main__':
    unittest.main()
