def parse_subgroup_read(words):
    return {'opcode': 'OpSubgroupReadInvocationKHR', 'index': words[4]}
