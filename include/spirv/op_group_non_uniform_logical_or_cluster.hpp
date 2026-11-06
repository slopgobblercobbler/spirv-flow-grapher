#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformLogicalOrClusterDef {
    static constexpr std::uint32_t opcode = 381;
    static constexpr std::string_view name = "OpGroupNonUniformLogicalOrCluster";
    static constexpr std::string_view desc = "Clustered logical OR reduction across invocation blocks";
};
}
