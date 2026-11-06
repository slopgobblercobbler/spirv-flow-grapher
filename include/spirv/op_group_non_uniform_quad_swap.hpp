#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformQuadSwapDef {
    static constexpr std::uint32_t opcode = 365;
    static constexpr std::string_view name = "OpGroupNonUniformQuadSwap";
    static constexpr std::string_view desc = "Swap value horizontally or vertically within 2x2 quad cluster";
};
}
