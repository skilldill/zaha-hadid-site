const INTERIOR_DESIGNS_ACTIONS_TYPES = {
    FIND_INTERIOR_DESIGNS: "interiorDesignActions"
}

export const interiorDesignActions = {
    findInteriorDesigns({ commit }, query) {
        commit(
            INTERIOR_DESIGNS_ACTIONS_TYPES.FIND_INTERIOR_DESIGNS,
            query
        )
    }
}