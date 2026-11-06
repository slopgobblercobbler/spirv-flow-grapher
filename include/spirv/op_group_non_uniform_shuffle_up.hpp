#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformShuffleUpDef {
    static constexpr std::uint32_t opcode = 346;
    static constexpr std::string_view name = "OpGroupNonUniformShuffleUp";
    static constexpr std::string_view desc = "Shuffle value from invocation with relative delta index upward";
};
}
