#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformLogicalXorDef {
    static constexpr std::uint32_t opcode = 363;
    static constexpr std::string_view name = "OpGroupNonUniformLogicalXor";
    static constexpr std::string_view desc = "Logical XOR reduction across active group boolean values";
};
}
