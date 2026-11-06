#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformBallotBitExtractDef {
    static constexpr std::uint32_t opcode = 341;
    static constexpr std::string_view name = "OpGroupNonUniformBallotBitExtract";
    static constexpr std::string_view desc = "Extract bit value at specified index from ballot bitmask";
};
}
