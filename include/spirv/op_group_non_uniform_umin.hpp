#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformUMinDef {
    static constexpr std::uint32_t opcode = 349;
    static constexpr std::string_view name = "OpGroupNonUniformUMin";
    static constexpr std::uint32_t group_operation_idx = 4;
};
}
