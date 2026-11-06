#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformFMaxClusterDef {
    static constexpr std::uint32_t opcode = 372;
    static constexpr std::string_view name = "OpGroupNonUniformFMaxCluster";
    static constexpr std::string_view desc = "Clustered floating-point maximum reduction across invocations";
};
}
