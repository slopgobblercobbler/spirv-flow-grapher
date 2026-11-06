#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformShuffleUpDef {
    static constexpr std::uint32_t opcode = 362;
    static constexpr std::string_view name = "OpGroupNonUniformShuffleUp";
    static constexpr std::uint32_t delta_idx = 5;
};
}
