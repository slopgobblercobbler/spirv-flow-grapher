#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformIMulDef {
    static constexpr std::uint32_t opcode = 346;
    static constexpr std::string_view name = "OpGroupNonUniformIMul";
    static constexpr std::uint32_t group_operation_idx = 4;
};
}
