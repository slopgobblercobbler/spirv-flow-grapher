import json
import os
import unittest

class TestSpirvSubgroupBallot(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'spirv_op_subgroup_ballot.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_ballot_opcodes(self):
        self.assertEqual(self.data['OpSubgroupBallotKHR'], 4421)
        self.assertEqual(self.data['OpSubgroupFirstInvocationKHR'], 4422)

if __name__ == '__main__':
    unittest.main()
