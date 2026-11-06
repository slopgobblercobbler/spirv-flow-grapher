#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformUMaxClusterDef {
    static constexpr std::uint32_t opcode = 376;
    static constexpr std::string_view name = "OpGroupNonUniformUMaxCluster";
    static constexpr std::string_view desc = "Clustered unsigned integer maximum reduction across invocations";
};
}
