export const designGetters = {
    foundDesigns: (state) => {
        return state.designs.filter((design) => design.name.includes(state.query))
    }
}