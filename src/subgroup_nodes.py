
def op_shuffle(src: str, lane: str) -> dict:
    return {'op': 'OpGroupNonUniformShuffle', 'src': src, 'lane': lane}

def op_shuffle_xor(src: str, mask: str) -> dict:
    return {'op': 'OpGroupNonUniformShuffleXor', 'src': src, 'mask': mask}

def op_shuffle_up(src: str, delta: str) -> dict:
    return {'op': 'OpGroupNonUniformShuffleUp', 'src': src, 'delta': delta}

def op_shuffle_down(src: str, delta: str) -> dict:
    return {'op': 'OpGroupNonUniformShuffleDown', 'src': src, 'delta': delta}

def op_iadd_reduction(val: str) -> dict:
    return {'op': 'OpGroupNonUniformIAdd', 'val': val}

def op_fadd_reduction(val: str) -> dict:
    return {'op': 'OpGroupNonUniformFAdd', 'val': val}

def op_imul_reduction(val: str) -> dict:
    return {'op': 'OpGroupNonUniformIMul', 'val': val}
