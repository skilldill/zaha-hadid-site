import Vue from "vue";
import Vuex from "vuex";

import { architectureStoreModule as architecture } from "./architecture";
import { stateRoutesModule as stateRoutes } from "./stateRoutes";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        architecture,
        stateRoutes
    }
});