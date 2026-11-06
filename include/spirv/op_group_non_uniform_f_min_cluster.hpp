#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformFMinClusterDef {
    static constexpr std::uint32_t opcode = 371;
    static constexpr std::string_view name = "OpGroupNonUniformFMinCluster";
    static constexpr std::string_view desc = "Clustered floating-point minimum reduction across invocations";
};
}
