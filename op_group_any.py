def parse_op_group_any(words):
    return {'opcode': 'OpGroupNonUniformAny', 'exec_scope': words[3], 'predicate': words[4]}
