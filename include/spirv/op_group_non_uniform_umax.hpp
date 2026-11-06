#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformUMaxDef {
    static constexpr std::uint32_t opcode = 351;
    static constexpr std::string_view name = "OpGroupNonUniformUMax";
    static constexpr std::uint32_t group_operation_idx = 4;
};
}
