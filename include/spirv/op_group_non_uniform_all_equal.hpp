#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformAllEqualDef {
    static constexpr std::uint32_t opcode = 343;
    static constexpr std::string_view name = "OpGroupNonUniformAllEqual";
    static constexpr std::uint32_t execution_scope_idx = 3;
    static constexpr std::uint32_t value_idx = 4;
};
}
