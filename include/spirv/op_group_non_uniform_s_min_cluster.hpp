#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformSMinClusterDef {
    static constexpr std::uint32_t opcode = 373;
    static constexpr std::string_view name = "OpGroupNonUniformSMinCluster";
    static constexpr std::string_view desc = "Clustered signed integer minimum reduction across invocations";
};
}
