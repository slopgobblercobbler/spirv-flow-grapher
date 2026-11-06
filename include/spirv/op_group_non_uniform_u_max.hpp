#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformUMaxDef {
    static constexpr std::uint32_t opcode = 355;
    static constexpr std::string_view name = "OpGroupNonUniformUMax";
    static constexpr std::string_view desc = "Unsigned integer maximum reduction across active invocations";
};
}
