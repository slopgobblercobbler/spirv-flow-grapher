#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformBroadcastDef {
    static constexpr std::uint32_t opcode = 340;
    static constexpr std::string_view name = "OpGroupNonUniformBroadcast";
    static constexpr std::uint32_t value_id_idx = 4;
    static constexpr std::uint32_t id_idx = 5;
};
}
