#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformSMinDef {
    static constexpr std::uint32_t opcode = 352;
    static constexpr std::string_view name = "OpGroupNonUniformSMin";
    static constexpr std::string_view desc = "Signed integer minimum reduction across active invocations";
};
}
