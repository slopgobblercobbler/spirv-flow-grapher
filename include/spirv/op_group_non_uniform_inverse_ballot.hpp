#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformInverseBallotDef {
    static constexpr std::uint32_t opcode = 340;
    static constexpr std::string_view name = "OpGroupNonUniformInverseBallot";
    static constexpr std::string_view desc = "Extract boolean value for current invocation from ballot bitmask";
};
}
