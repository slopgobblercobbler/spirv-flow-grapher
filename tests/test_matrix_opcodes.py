import json
import os
import unittest

class TestMatrixOpcodes(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'matrix_opcodes.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_opcodes(self):
        self.assertEqual(self.data['OpMatrixTimesMatrix'], 146)
        self.assertEqual(self.data['OpMatrixTimesVector'], 145)

if __name__ == '__main__':
    unittest.main()
