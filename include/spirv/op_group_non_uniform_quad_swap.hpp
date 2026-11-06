#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformQuadSwapDef {
    static constexpr std::uint32_t opcode = 365;
    static constexpr std::string_view name = "OpGroupNonUniformQuadSwap";
    static constexpr std::uint32_t direction_idx = 5;
};
}
