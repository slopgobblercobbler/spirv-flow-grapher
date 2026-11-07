def parse_op_quad_swap(words):
    return {'opcode': 'OpGroupNonUniformQuadSwap', 'scope': words[3], 'val': words[4], 'dir': words[5]}
