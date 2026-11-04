import json
import os
import unittest

class TestCompositeOpcodes(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'composite_extract_opcodes.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_opcodes(self):
        self.assertEqual(self.data['OpCompositeConstruct'], 80)
        self.assertEqual(self.data['OpCompositeExtract'], 81)
        self.assertEqual(self.data['OpTranspose'], 84)

if __name__ == '__main__':
    unittest.main()
