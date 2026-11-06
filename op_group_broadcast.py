def parse_op_group_broadcast(words):
    return {'opcode': 'OpGroupNonUniformBroadcast', 'exec_scope': words[3], 'val': words[4], 'id': words[5]}
