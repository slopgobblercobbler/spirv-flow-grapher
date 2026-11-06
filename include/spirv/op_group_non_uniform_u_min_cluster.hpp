#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformUMinClusterDef {
    static constexpr std::uint32_t opcode = 375;
    static constexpr std::string_view name = "OpGroupNonUniformUMinCluster";
    static constexpr std::string_view desc = "Clustered unsigned integer minimum reduction across invocations";
};
}
