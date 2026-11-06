#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformLogicalAndDef {
    static constexpr std::uint32_t opcode = 361;
    static constexpr std::string_view name = "OpGroupNonUniformLogicalAnd";
    static constexpr std::string_view desc = "Logical AND reduction across active group boolean values";
};
}
