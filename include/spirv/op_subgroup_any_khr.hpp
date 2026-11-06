#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpSubgroupAnyKhrDef {
    static constexpr std::uint32_t opcode = 4429;
    static constexpr std::string_view name = "OpSubgroupAnyKHR";
    static constexpr std::uint32_t predicate_idx = 3;
};
}
