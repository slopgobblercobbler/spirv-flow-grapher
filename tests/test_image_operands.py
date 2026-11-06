import json
import os
import unittest

class TestImageOperands(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'spirv_image_operands.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_operands(self):
        self.assertEqual(self.data['Bias'], "0x0001")
        self.assertEqual(self.data['Lod'], "0x0002")

if __name__ == '__main__':
    unittest.main()
