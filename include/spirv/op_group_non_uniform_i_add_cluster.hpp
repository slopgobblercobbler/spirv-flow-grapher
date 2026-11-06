#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformIAddClusterDef {
    static constexpr std::uint32_t opcode = 368;
    static constexpr std::string_view name = "OpGroupNonUniformIAddCluster";
    static constexpr std::string_view desc = "Clustered integer addition reduction across invocation blocks";
};
}
