#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpSubgroupXorKhrDef {
    static constexpr std::uint32_t opcode = 4434;
    static constexpr std::string_view name = "OpSubgroupXorKHR";
    static constexpr std::string_view desc = "Bitwise XOR reduction across active invocations in subgroup";
};
}
