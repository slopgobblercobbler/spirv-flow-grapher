import json
import os
import unittest

class TestGlslOpcodes(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'glsl_std_450_opcodes.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_opcodes(self):
        self.assertEqual(self.data['Round'], 1)
        self.assertEqual(self.data['Sin'], 13)
        self.assertEqual(self.data['Sqrt'], 31)

if __name__ == '__main__':
    unittest.main()
