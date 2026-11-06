import json
import os
import unittest

class TestSpirvShuffle(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'spirv_op_subgroup_shuffle.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_shuffle(self):
        self.assertEqual(self.data['OpSubgroupShuffleINTEL'], 5571)
        self.assertEqual(self.data['OpSubgroupShuffleDownINTEL'], 5572)

if __name__ == '__main__':
    unittest.main()
