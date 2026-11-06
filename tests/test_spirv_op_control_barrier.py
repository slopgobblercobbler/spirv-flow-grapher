import json
import os
import unittest

class TestSpirvBarrier(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'spirv_op_control_barrier.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_barrier_opcodes(self):
        self.assertEqual(self.data['OpControlBarrier'], 224)
        self.assertEqual(self.data['OpMemoryBarrier'], 225)

if __name__ == '__main__':
    unittest.main()
