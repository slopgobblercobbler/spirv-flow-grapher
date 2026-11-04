import json
import os
import unittest

class TestExtendedSets(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'extended_instruction_sets.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_sets(self):
        self.assertEqual(self.data['GLSL_std_450'], "GLSL.std.450")

if __name__ == '__main__':
    unittest.main()
