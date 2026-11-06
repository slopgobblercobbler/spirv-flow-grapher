#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformFMinDef {
    static constexpr std::uint32_t opcode = 350;
    static constexpr std::string_view name = "OpGroupNonUniformFMin";
    static constexpr std::string_view desc = "Floating-point minimum reduction across active group invocations";
};
}
