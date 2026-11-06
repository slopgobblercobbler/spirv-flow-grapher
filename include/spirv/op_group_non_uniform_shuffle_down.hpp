#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformShuffleDownDef {
    static constexpr std::uint32_t opcode = 363;
    static constexpr std::string_view name = "OpGroupNonUniformShuffleDown";
    static constexpr std::uint32_t delta_idx = 5;
};
}
