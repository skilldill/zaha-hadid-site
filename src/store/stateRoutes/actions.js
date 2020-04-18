export const SET_START_CHANGE_ROUTE = "setStartChangeRoute";

export const stateRoutesActions = {
    setStartChangeRoute({ commit }, isStartChangeRoute) {
        commit(SET_START_CHANGE_ROUTE, isStartChangeRoute);
    }
}