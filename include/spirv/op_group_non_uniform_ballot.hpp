#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformBallotDef {
    static constexpr std::uint32_t opcode = 339;
    static constexpr std::string_view name = "OpGroupNonUniformBallot";
    static constexpr std::string_view desc = "Produce bitmask indicating which invocations evaluated predicate to true";
};
}
