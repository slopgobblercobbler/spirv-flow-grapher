def parse_op_group_ballot_find_lsb(words):
    return {'opcode': 'OpGroupNonUniformBallotFindLSB', 'exec_scope': words[3], 'value': words[4]}
