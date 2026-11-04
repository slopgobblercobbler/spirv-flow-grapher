import json
import os
import unittest

class TestInstructionClasses(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'instruction_classes.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_categories(self):
        self.assertEqual(self.data['OpLoad'], 'Memory')
        self.assertEqual(self.data['OpBranchConditional'], 'ControlFlow')
        self.assertEqual(self.data['OpConstant'], 'Constants')

if __name__ == '__main__':
    unittest.main()
