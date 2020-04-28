import { designActions as actions } from "./actions";
import { designMutations as mutations } from "./mutations";
import { designGetters as getters } from "./getters";
import { designState as state } from "./state";

export const designModule = {
    state,
    getters,
    actions,
    mutations
} 