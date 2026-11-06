#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformUMinDef {
    static constexpr std::uint32_t opcode = 354;
    static constexpr std::string_view name = "OpGroupNonUniformUMin";
    static constexpr std::string_view desc = "Unsigned integer minimum reduction across active invocations";
};
}
