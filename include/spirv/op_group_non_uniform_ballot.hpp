#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformBallotDef {
    static constexpr std::uint32_t opcode = 339;
    static constexpr std::string_view name = "OpGroupNonUniformBallot";
    static constexpr std::uint32_t execution_scope_idx = 3;
};
}
