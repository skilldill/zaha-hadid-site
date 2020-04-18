import Vue from "vue";
import Vuex from "vuex";

import { architectureStoreModule as architecture } from "./architecture";
import { projectsMenuModule as projectsMenu } from "./projectsMenu";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        architecture,
        projectsMenu
    }
});