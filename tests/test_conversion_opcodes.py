import json
import os
import unittest

class TestConversionOpcodes(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'conversion_opcodes.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_conversions(self):
        self.assertEqual(self.data['OpConvertFToU'], 109)
        self.assertEqual(self.data['OpBitcast'], 124)

if __name__ == '__main__':
    unittest.main()
