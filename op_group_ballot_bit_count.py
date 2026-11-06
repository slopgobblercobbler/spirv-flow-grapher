def parse_op_group_ballot_bit_count(words):
    return {'opcode': 'OpGroupNonUniformBallotBitCount', 'exec_scope': words[3], 'op': words[4], 'value': words[5]}
