#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformAnyDef {
    static constexpr std::uint32_t opcode = 342;
    static constexpr std::string_view name = "OpGroupNonUniformAny";
    static constexpr std::uint32_t predicate_idx = 4;
};
}
