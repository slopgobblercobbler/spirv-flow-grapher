#pragma once
#include <cstdint>
#include <string_view>

namespace spirv {
struct OpGroupNonUniformElectDef {
    static constexpr std::uint32_t opcode = 338;
    static constexpr std::string_view name = "OpGroupNonUniformElect";
    static constexpr std::uint32_t execution_scope_idx = 3;
};
}
