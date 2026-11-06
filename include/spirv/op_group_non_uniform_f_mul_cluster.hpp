#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformFMulClusterDef {
    static constexpr std::uint32_t opcode = 369;
    static constexpr std::string_view name = "OpGroupNonUniformFMulCluster";
    static constexpr std::string_view desc = "Clustered floating-point multiplication reduction across invocations";
};
}
