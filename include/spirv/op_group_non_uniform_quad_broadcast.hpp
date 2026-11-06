#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformQuadBroadcastDef {
    static constexpr std::uint32_t opcode = 364;
    static constexpr std::string_view name = "OpGroupNonUniformQuadBroadcast";
    static constexpr std::uint32_t index_in_quad_idx = 5;
};
}
