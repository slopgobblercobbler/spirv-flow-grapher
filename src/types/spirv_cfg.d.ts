export interface SPIRVBasicBlock {
    id: number;
    label: string;
    instructions: string[];
    predecessors: number[];
    successors: number[];
    mergeBlockId?: number;
    continueTargetId?: number;
}

export interface SPIRVCFG {
    entryBlockId: number;
    blocks: Map<number, SPIRVBasicBlock>;
    dominanceTree?: Map<number, Set<number>>;
}
