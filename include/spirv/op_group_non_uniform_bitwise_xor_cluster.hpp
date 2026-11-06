#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformBitwiseXorClusterDef {
    static constexpr std::uint32_t opcode = 379;
    static constexpr std::string_view name = "OpGroupNonUniformBitwiseXorCluster";
    static constexpr std::string_view desc = "Clustered bitwise XOR reduction across invocation blocks";
};
}
