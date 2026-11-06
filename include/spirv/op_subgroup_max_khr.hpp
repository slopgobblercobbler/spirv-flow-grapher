#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpSubgroupMaxKhrDef {
    static constexpr std::uint32_t opcode = 4432;
    static constexpr std::string_view name = "OpSubgroupMaxKHR";
    static constexpr std::uint32_t value_idx = 3;
};
}
