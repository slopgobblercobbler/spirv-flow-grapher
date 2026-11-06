#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformFAddDef {
    static constexpr std::uint32_t opcode = 345;
    static constexpr std::string_view name = "OpGroupNonUniformFAdd";
    static constexpr std::uint32_t group_operation_idx = 4;
};
}
