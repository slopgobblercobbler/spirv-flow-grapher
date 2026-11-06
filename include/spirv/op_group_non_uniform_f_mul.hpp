#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformFMulDef {
    static constexpr std::uint32_t opcode = 349;
    static constexpr std::string_view name = "OpGroupNonUniformFMul";
    static constexpr std::string_view desc = "Floating-point multiplication reduction across active group invocations";
};
}
