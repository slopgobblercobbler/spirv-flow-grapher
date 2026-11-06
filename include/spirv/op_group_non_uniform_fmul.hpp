#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformFMulDef {
    static constexpr std::uint32_t opcode = 347;
    static constexpr std::string_view name = "OpGroupNonUniformFMul";
    static constexpr std::uint32_t group_operation_idx = 4;
};
}
