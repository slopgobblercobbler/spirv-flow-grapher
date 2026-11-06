#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformShuffleDownDef {
    static constexpr std::uint32_t opcode = 347;
    static constexpr std::string_view name = "OpGroupNonUniformShuffleDown";
    static constexpr std::string_view desc = "Shuffle value from invocation with relative delta index downward";
};
}
