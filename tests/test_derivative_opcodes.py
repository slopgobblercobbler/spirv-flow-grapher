import json
import os
import unittest

class TestDerivativeOpcodes(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'derivative_opcodes.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_opcodes(self):
        self.assertEqual(self.data['OpDPdx'], 207)
        self.assertEqual(self.data['OpDPdy'], 208)
        self.assertEqual(self.data['OpFwidth'], 209)

if __name__ == '__main__':
    unittest.main()
