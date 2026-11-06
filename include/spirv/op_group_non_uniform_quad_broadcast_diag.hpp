#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformQuadBroadcastDiagDef {
    static constexpr std::uint32_t opcode = 383;
    static constexpr std::string_view name = "OpGroupNonUniformQuadBroadcastDiag";
    static constexpr std::string_view desc = "Broadcast value diagonally across 2x2 quad invocation cluster";
};
}
