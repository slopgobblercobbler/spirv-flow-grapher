#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformBallotFindMsbDef {
    static constexpr std::uint32_t opcode = 344;
    static constexpr std::string_view name = "OpGroupNonUniformBallotFindMSB";
    static constexpr std::string_view desc = "Find index of most significant bit set in ballot bitmask";
};
}
