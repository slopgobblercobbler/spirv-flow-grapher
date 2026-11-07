def parse_op_group_umin(words):
    return {'opcode': 'OpGroupNonUniformUMin', 'scope': words[3], 'op': words[4], 'val': words[5]}
