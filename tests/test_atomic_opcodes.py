import json
import os
import unittest

class TestAtomicOpcodes(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'atomic_opcodes.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_opcodes(self):
        self.assertEqual(self.data['OpAtomicLoad'], 227)
        self.assertEqual(self.data['OpAtomicStore'], 228)
        self.assertEqual(self.data['OpAtomicExchange'], 229)
        self.assertEqual(self.data['OpAtomicIAdd'], 234)

if __name__ == '__main__':
    unittest.main()
