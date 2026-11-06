#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpSubgroupFirstInvocationKhrDef {
    static constexpr std::uint32_t opcode = 4422;
    static constexpr std::string_view name = "OpSubgroupFirstInvocationKHR";
    static constexpr std::uint32_t value_idx = 3;
};
}
