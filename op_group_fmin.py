def parse_op_group_fmin(words):
    return {'opcode': 'OpGroupNonUniformFMin', 'scope': words[3], 'op': words[4], 'val': words[5]}
