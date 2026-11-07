def parse_op_group_bit_and(words):
    return {'opcode': 'OpGroupNonUniformBitwiseAnd', 'scope': words[3], 'op': words[4], 'val': words[5]}
