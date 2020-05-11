import Vue from "vue";
import Vuex from "vuex";

import { architectureStoreModule as architecture } from "./architecture";
import { stateRoutesModule as stateRoutes } from "./stateRoutes";
import { interiorDesignsModule as interiorDesigns} from "./interiorDesign";
import { designModule as design } from "./design";
import { directorsModule as directors } from "./directors";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        architecture,
        stateRoutes,
        interiorDesigns, 
        design,
        directors
    }
});