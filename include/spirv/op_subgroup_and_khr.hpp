#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpSubgroupAndKhrDef {
    static constexpr std::uint32_t opcode = 4433;
    static constexpr std::string_view name = "OpSubgroupAndKHR";
    static constexpr std::uint32_t value_idx = 3;
};
}
