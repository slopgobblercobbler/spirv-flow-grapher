#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformLogicalOrDef {
    static constexpr std::uint32_t opcode = 358;
    static constexpr std::string_view name = "OpGroupNonUniformLogicalOr";
    static constexpr std::uint32_t group_operation_idx = 4;
};
}
