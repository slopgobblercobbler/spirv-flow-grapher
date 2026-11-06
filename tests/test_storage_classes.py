import json
import os
import unittest

class TestStorageClasses(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'spirv_storage_classes.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_classes(self):
        self.assertEqual(self.data['StorageBuffer'], 12)
        self.assertEqual(self.data['UniformConstant'], 0)

if __name__ == '__main__':
    unittest.main()
