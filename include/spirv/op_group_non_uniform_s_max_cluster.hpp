#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformSMaxClusterDef {
    static constexpr std::uint32_t opcode = 374;
    static constexpr std::string_view name = "OpGroupNonUniformSMaxCluster";
    static constexpr std::string_view desc = "Clustered signed integer maximum reduction across invocations";
};
}
