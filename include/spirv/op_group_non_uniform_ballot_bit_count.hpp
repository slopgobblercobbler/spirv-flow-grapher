#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformBallotBitCountDef {
    static constexpr std::uint32_t opcode = 342;
    static constexpr std::string_view name = "OpGroupNonUniformBallotBitCount";
    static constexpr std::string_view desc = "Count number of set bits in ballot bitmask across invocations";
};
}
