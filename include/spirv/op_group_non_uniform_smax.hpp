#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformSMaxDef {
    static constexpr std::uint32_t opcode = 350;
    static constexpr std::string_view name = "OpGroupNonUniformSMax";
    static constexpr std::uint32_t group_operation_idx = 4;
};
}
