#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformQuadBroadcastDef {
    static constexpr std::uint32_t opcode = 364;
    static constexpr std::string_view name = "OpGroupNonUniformQuadBroadcast";
    static constexpr std::string_view desc = "Broadcast value from specified quad lane within 2x2 cluster";
};
}
