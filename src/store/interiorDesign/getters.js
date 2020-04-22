export const interiorDesignGetters = {
    foundInteriorDesigns: (state) => {
        return state.designs.filter((interior) => 
            interior.name.includes(state.query)
        );
    }
}