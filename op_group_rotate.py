def parse_op_group_rotate(words):
    return {'opcode': 'OpGroupNonUniformRotate', 'scope': words[3], 'val': words[4], 'delta': words[5]}
