#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpSubgroupMinKhrDef {
    static constexpr std::uint32_t opcode = 4431;
    static constexpr std::string_view name = "OpSubgroupMinKHR";
    static constexpr std::uint32_t value_idx = 3;
};
}
