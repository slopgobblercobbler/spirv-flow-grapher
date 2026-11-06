#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformBitwiseXorDef {
    static constexpr std::uint32_t opcode = 356;
    static constexpr std::string_view name = "OpGroupNonUniformBitwiseXor";
    static constexpr std::uint32_t group_operation_idx = 4;
};
}
