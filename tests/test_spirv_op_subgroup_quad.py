import json
import os
import unittest

class TestSpirvQuad(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'spirv_op_subgroup_quad_broadcast.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_quad_opcodes(self):
        self.assertEqual(self.data['OpGroupQuadBroadcastKHR'], 4426)
        self.assertEqual(self.data['OpGroupQuadSwapHorizontalKHR'], 4427)

if __name__ == '__main__':
    unittest.main()
