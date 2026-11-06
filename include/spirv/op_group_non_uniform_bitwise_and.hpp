#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformBitwiseAndDef {
    static constexpr std::uint32_t opcode = 358;
    static constexpr std::string_view name = "OpGroupNonUniformBitwiseAnd";
    static constexpr std::string_view desc = "Bitwise AND reduction across active group invocations";
};
}
