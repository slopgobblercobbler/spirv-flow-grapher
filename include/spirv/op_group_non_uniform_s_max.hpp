#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformSMaxDef {
    static constexpr std::uint32_t opcode = 353;
    static constexpr std::string_view name = "OpGroupNonUniformSMax";
    static constexpr std::string_view desc = "Signed integer maximum reduction across active invocations";
};
}
