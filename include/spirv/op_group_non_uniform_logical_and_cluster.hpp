#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformLogicalAndClusterDef {
    static constexpr std::uint32_t opcode = 380;
    static constexpr std::string_view name = "OpGroupNonUniformLogicalAndCluster";
    static constexpr std::string_view desc = "Clustered logical AND reduction across invocation blocks";
};
}
