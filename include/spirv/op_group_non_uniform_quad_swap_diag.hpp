#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformQuadSwapDiagDef {
    static constexpr std::uint32_t opcode = 366;
    static constexpr std::string_view name = "OpGroupNonUniformQuadSwapDiag";
    static constexpr std::string_view desc = "Swap value diagonally within 2x2 quad invocation cluster";
};
}
