#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformFMaxDef {
    static constexpr std::uint32_t opcode = 351;
    static constexpr std::string_view name = "OpGroupNonUniformFMax";
    static constexpr std::string_view desc = "Floating-point maximum reduction across active invocations";
};
}
