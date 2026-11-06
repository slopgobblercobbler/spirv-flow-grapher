#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformLogicalOrDef {
    static constexpr std::uint32_t opcode = 362;
    static constexpr std::string_view name = "OpGroupNonUniformLogicalOr";
    static constexpr std::string_view desc = "Logical OR reduction across active group boolean values";
};
}
