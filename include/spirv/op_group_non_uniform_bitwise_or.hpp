#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformBitwiseOrDef {
    static constexpr std::uint32_t opcode = 359;
    static constexpr std::string_view name = "OpGroupNonUniformBitwiseOr";
    static constexpr std::string_view desc = "Bitwise OR reduction across active group invocations";
};
}
