#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformSMinDef {
    static constexpr std::uint32_t opcode = 348;
    static constexpr std::string_view name = "OpGroupNonUniformSMin";
    static constexpr std::uint32_t group_operation_idx = 4;
};
}
