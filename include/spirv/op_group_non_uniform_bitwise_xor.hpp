#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformBitwiseXorDef {
    static constexpr std::uint32_t opcode = 360;
    static constexpr std::string_view name = "OpGroupNonUniformBitwiseXor";
    static constexpr std::string_view desc = "Bitwise XOR reduction across active group invocations";
};
}
