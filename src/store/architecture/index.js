import { architectureActions as actions} from "./actions";
import { architectureState as state } from "./state";
import { architectureGetters as getters } from "./getters";
import { architectureMutations as mutations } from "./mutations";

export const architectureStoreModule = {
    state,
    mutations,
    getters,
    actions
}
