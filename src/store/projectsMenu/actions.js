export const SET_START_CHANGE_ROUTE = "setStartChangeRoute";

export const projectsMenuActions = {
    setStartChangeRoute({ commit }, isStartChangeRoute) {
        commit(SET_START_CHANGE_ROUTE, isStartChangeRoute);
    }
}