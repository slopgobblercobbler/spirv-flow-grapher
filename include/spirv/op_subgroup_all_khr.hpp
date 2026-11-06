#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpSubgroupAllKhrDef {
    static constexpr std::uint32_t opcode = 4428;
    static constexpr std::string_view name = "OpSubgroupAllKHR";
    static constexpr std::uint32_t predicate_idx = 3;
};
}
