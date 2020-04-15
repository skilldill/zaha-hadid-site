export const ACRHITECTURE_ACTIONS_TYPES = {
    CHANGE_QUERY: "changeQuery"
}

export const architectureActions = {
    changeQuery({ commit }, value) {
        console.log(value);        
        commit(
            ACRHITECTURE_ACTIONS_TYPES.CHANGE_QUERY,
            value
        )
    }
}