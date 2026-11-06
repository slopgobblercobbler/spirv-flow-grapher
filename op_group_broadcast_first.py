def parse_op_group_broadcast_first(words):
    return {'opcode': 'OpGroupNonUniformBroadcastFirst', 'exec_scope': words[3], 'val': words[4]}
