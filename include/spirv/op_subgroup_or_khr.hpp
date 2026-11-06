#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpSubgroupOrKhrDef {
    static constexpr std::uint32_t opcode = 4434;
    static constexpr std::string_view name = "OpSubgroupOrKHR";
    static constexpr std::uint32_t value_idx = 3;
};
}
