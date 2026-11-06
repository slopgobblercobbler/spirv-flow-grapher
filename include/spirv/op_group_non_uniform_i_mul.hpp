#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformIMulDef {
    static constexpr std::uint32_t opcode = 357;
    static constexpr std::string_view name = "OpGroupNonUniformIMul";
    static constexpr std::string_view desc = "Integer multiplication reduction across active group invocations";
};
}
