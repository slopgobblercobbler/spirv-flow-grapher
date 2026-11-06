#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformBallotFindLsbDef {
    static constexpr std::uint32_t opcode = 343;
    static constexpr std::string_view name = "OpGroupNonUniformBallotFindLSB";
    static constexpr std::string_view desc = "Find index of least significant bit set in ballot bitmask";
};
}
