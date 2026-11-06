#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformIAddDef {
    static constexpr std::uint32_t opcode = 344;
    static constexpr std::string_view name = "OpGroupNonUniformIAdd";
    static constexpr std::uint32_t group_operation_idx = 4;
};
}
