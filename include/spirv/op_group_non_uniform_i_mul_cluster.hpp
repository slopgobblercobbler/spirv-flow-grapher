#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformIMulClusterDef {
    static constexpr std::uint32_t opcode = 370;
    static constexpr std::string_view name = "OpGroupNonUniformIMulCluster";
    static constexpr std::string_view desc = "Clustered integer multiplication reduction across invocations";
};
}
