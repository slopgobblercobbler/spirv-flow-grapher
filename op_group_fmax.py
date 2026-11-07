def parse_op_group_fmax(words):
    return {'opcode': 'OpGroupNonUniformFMax', 'scope': words[3], 'op': words[4], 'val': words[5]}
