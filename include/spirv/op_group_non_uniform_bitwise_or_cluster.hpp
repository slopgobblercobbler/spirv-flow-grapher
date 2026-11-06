#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformBitwiseOrClusterDef {
    static constexpr std::uint32_t opcode = 378;
    static constexpr std::string_view name = "OpGroupNonUniformBitwiseOrCluster";
    static constexpr std::string_view desc = "Clustered bitwise OR reduction across invocations";
};
}
