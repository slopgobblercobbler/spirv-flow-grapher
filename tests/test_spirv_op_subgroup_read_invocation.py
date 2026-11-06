import json
import os
import unittest

class TestSpirvSubgroupReductions(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'spirv_op_subgroup_read_invocation.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_reductions(self):
        self.assertEqual(self.data['OpSubgroupAllKHR'], 4428)
        self.assertEqual(self.data['OpSubgroupAnyKHR'], 4429)

if __name__ == '__main__':
    unittest.main()
