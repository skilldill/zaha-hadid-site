import Projects from "./Projects.vue";
import * as childrens from "./pages";
import { PROJECTS_ROUTER_URLS } from "./constants";

const projectPages = [
    { path: PROJECTS_ROUTER_URLS.ARCHITECTURE, component: childrens.Architecture },
    { path: PROJECTS_ROUTER_URLS.DESIGN, component: childrens.Design },
    { path: PROJECTS_ROUTER_URLS.INTERIOR_DESIGN, component: childrens.InteriorDesign },
    { path: PROJECTS_ROUTER_URLS.MASTERPLANS, component: childrens.Masterplans }
]

export { 
    Projects,
    projectPages
};