import Vue from "vue";
import VueRouter from "vue-router";

import { ROUTER_URLS } from "../../shared/constants";
import {
    Home,
    About,
    Projects
} from "../pages";

import { projectPages } from "../pages/Projects";
import {
    SingleArchitecture,
    SingleInteriorDesign,
    SingleDesign
} from "../pages/Projects/pages";

Vue.use(VueRouter);

const routes = [
    { path: ROUTER_URLS.BASE, redirect: ROUTER_URLS.HOME },
    { path: ROUTER_URLS.HOME, name: "home", component: Home },
    { path: ROUTER_URLS.ABOUT, name: "about", component: About },
    { 
        path: ROUTER_URLS.PROJECTS, 
        name: "projects", 
        component: Projects,
        children: projectPages
    },
    { 
        path: ROUTER_URLS.ARCHITECTURE_PAGE, 
        name: "architecture_page",
        component: SingleArchitecture
    },
    { 
        path: ROUTER_URLS.INTERIOR_DESIGN_PAGE, 
        name: "interior_design_page",
        component: SingleInteriorDesign
    },
    {
        path: ROUTER_URLS.DESIGN_PAGE,
        name: "design_page",
        component: SingleDesign
    }
]

export const router = new VueRouter({
    mode: "history",
    routes
});