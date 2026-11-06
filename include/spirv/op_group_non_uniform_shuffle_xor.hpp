#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformShuffleXorDef {
    static constexpr std::uint32_t opcode = 361;
    static constexpr std::string_view name = "OpGroupNonUniformShuffleXor";
    static constexpr std::uint32_t mask_idx = 5;
};
}
