import Projects from "./Projects.vue";
import * as childrens from "./pages";
import { PROJECTS_ROUTER_URLS } from "./constants";

const projectPages = [
    { 
        path: PROJECTS_ROUTER_URLS.ARCHITECTURE, 
        component: childrens.Architecture,
        name: 'architecture'
    },
    { 
        path: PROJECTS_ROUTER_URLS.DESIGN, 
        component: childrens.Design,
        name: 'design'
    },
    { 
        path: PROJECTS_ROUTER_URLS.INTERIOR_DESIGN,
        component: childrens.InteriorDesign,
        name: 'interior-design'
    },
    { 
        path: PROJECTS_ROUTER_URLS.MASTERPLANS,
        component: childrens.Masterplans,
        name: 'masterplans'
    }
]

export { 
    Projects,
    projectPages
};