#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformAllDef {
    static constexpr std::uint32_t opcode = 341;
    static constexpr std::string_view name = "OpGroupNonUniformAll";
    static constexpr std::uint32_t predicate_idx = 4;
};
}
