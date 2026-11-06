#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformBitwiseOrDef {
    static constexpr std::uint32_t opcode = 355;
    static constexpr std::string_view name = "OpGroupNonUniformBitwiseOr";
    static constexpr std::uint32_t group_operation_idx = 4;
};
}
