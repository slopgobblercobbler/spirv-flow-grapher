def parse_op_group_all(words):
    return {'opcode': 'OpGroupNonUniformAll', 'exec_scope': words[3], 'predicate': words[4]}
