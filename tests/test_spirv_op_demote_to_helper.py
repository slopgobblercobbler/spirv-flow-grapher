import json
import os
import unittest

class TestSpirvDemote(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'spirv_op_demote_to_helper.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_demote(self):
        self.assertEqual(self.data['OpDemoteToHelperInvocation'], 5380)

if __name__ == '__main__':
    unittest.main()
