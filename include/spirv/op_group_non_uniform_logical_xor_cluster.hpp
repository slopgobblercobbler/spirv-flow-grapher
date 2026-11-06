#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformLogicalXorClusterDef {
    static constexpr std::uint32_t opcode = 382;
    static constexpr std::string_view name = "OpGroupNonUniformLogicalXorCluster";
    static constexpr std::string_view desc = "Clustered logical XOR reduction across invocation blocks";
};
}
