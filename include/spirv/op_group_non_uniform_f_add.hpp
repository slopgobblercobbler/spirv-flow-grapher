#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformFAddDef {
    static constexpr std::uint32_t opcode = 348;
    static constexpr std::string_view name = "OpGroupNonUniformFAdd";
    static constexpr std::string_view desc = "Floating-point addition reduction across active group invocations";
};
}
