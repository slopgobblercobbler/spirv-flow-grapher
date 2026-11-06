#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformIAddDef {
    static constexpr std::uint32_t opcode = 356;
    static constexpr std::string_view name = "OpGroupNonUniformIAdd";
    static constexpr std::string_view desc = "Integer addition reduction across active group invocations";
};
}
