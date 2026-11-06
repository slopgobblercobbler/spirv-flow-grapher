#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpSubgroupMulKhrDef {
    static constexpr std::uint32_t opcode = 4430;
    static constexpr std::string_view name = "OpSubgroupMulKHR";
    static constexpr std::uint32_t value_idx = 3;
};
}
