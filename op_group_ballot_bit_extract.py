def parse_op_group_ballot_bit_extract(words):
    return {'opcode': 'OpGroupNonUniformBallotBitExtract', 'exec_scope': words[3], 'value': words[4], 'index': words[5]}
