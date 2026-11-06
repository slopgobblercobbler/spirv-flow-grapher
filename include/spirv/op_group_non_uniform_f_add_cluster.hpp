#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformFAddClusterDef {
    static constexpr std::uint32_t opcode = 367;
    static constexpr std::string_view name = "OpGroupNonUniformFAddCluster";
    static constexpr std::string_view desc = "Clustered floating-point addition reduction across invocation blocks";
};
}
