
def op_shuffle(src: str, lane: str) -> dict:
    return {'op': 'OpGroupNonUniformShuffle', 'src': src, 'lane': lane}

def op_shuffle_xor(src: str, mask: str) -> dict:
    return {'op': 'OpGroupNonUniformShuffleXor', 'src': src, 'mask': mask}
