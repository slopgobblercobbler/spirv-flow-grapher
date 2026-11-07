def parse_op_group_smin(words):
    return {'opcode': 'OpGroupNonUniformSMin', 'scope': words[3], 'op': words[4], 'val': words[5]}
