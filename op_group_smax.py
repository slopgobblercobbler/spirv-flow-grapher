def parse_op_group_smax(words):
    return {'opcode': 'OpGroupNonUniformSMax', 'scope': words[3], 'op': words[4], 'val': words[5]}
