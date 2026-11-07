def parse_op_group_umax(words):
    return {'opcode': 'OpGroupNonUniformUMax', 'scope': words[3], 'op': words[4], 'val': words[5]}
