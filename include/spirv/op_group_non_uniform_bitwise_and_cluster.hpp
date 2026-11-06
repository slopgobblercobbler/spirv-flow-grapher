#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformBitwiseAndClusterDef {
    static constexpr std::uint32_t opcode = 377;
    static constexpr std::string_view name = "OpGroupNonUniformBitwiseAndCluster";
    static constexpr std::string_view desc = "Clustered bitwise AND reduction across invocations";
};
}
