#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformBitwiseAndDef {
    static constexpr std::uint32_t opcode = 354;
    static constexpr std::string_view name = "OpGroupNonUniformBitwiseAnd";
    static constexpr std::uint32_t group_operation_idx = 4;
};
}
