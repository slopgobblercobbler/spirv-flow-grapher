#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpSubgroupBallotKhrDef {
    static constexpr std::uint32_t opcode = 4421;
    static constexpr std::string_view name = "OpSubgroupBallotKHR";
    static constexpr std::uint32_t predicate_idx = 3;
};
}
