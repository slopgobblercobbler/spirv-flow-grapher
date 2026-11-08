def parse_quad_broadcast(words):
    return {'opcode': 'OpGroupNonUniformQuadBroadcast', 'scope': words[3]}
