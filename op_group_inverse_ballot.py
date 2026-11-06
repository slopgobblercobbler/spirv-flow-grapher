def parse_op_group_inverse_ballot(words):
    return {'opcode': 'OpGroupNonUniformInverseBallot', 'exec_scope': words[3], 'value': words[4]}
