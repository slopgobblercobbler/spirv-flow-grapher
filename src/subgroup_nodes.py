
def op_shuffle(src: str, lane: str) -> dict:
    return {'op': 'OpGroupNonUniformShuffle', 'src': src, 'lane': lane}
