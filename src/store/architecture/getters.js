export const architectureGetters = {
    foundArchitectures: (state) => {
        return state.architectures.filter((architecture) => {
            return architecture.name.includes(state.architecture.query);
        })
    }
}