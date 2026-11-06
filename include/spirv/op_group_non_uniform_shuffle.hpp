#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformShuffleDef {
    static constexpr std::uint32_t opcode = 360;
    static constexpr std::string_view name = "OpGroupNonUniformShuffle";
    static constexpr std::uint32_t invocation_id_idx = 5;
};
}
