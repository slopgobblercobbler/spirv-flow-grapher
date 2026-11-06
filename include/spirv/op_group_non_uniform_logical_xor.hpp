#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformLogicalXorDef {
    static constexpr std::uint32_t opcode = 359;
    static constexpr std::string_view name = "OpGroupNonUniformLogicalXor";
    static constexpr std::uint32_t group_operation_idx = 4;
};
}
