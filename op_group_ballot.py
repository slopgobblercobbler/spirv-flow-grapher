def parse_op_group_ballot(words):
    return {'opcode': 'OpGroupNonUniformBallot', 'exec_scope': words[3], 'predicate': words[4]}
