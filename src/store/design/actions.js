export const DESIGN_ACTIONS_TYPES = {
    CHANGE_QUERY: "changeQuery"
}

export const designActions = {
    changeQuery({ commit }, value) {
        commit(
            DESIGN_ACTIONS_TYPES.CHANGE_QUERY,
            value
        )
    }
}