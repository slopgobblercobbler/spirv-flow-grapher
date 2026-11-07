def parse_op_quad_broadcast(words):
    return {'opcode': 'OpGroupNonUniformQuadBroadcast', 'scope': words[3], 'val': words[4], 'idx': words[5]}
