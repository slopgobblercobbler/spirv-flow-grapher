import json
import os
import unittest

class TestBitInstructions(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'bit_instructions.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_opcodes(self):
        self.assertEqual(self.data['OpShiftRightLogical'], 194)
        self.assertEqual(self.data['OpBitwiseOr'], 197)
        self.assertEqual(self.data['OpNot'], 200)

if __name__ == '__main__':
    unittest.main()
