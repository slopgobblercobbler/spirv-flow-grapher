def parse_op_group_all_equal(words):
    return {'opcode': 'OpGroupNonUniformAllEqual', 'exec_scope': words[3], 'value': words[4]}
