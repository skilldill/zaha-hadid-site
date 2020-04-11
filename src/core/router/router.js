import Vue from "vue";
import VueRouter from "vue-router";

import { ROUTER_URLS } from "../../shared/constants";
import {
    Home,
    About,
    Projects
} from "../pages";

Vue.use(VueRouter);

const routes = [
    { path: ROUTER_URLS.BASE, redirect: ROUTER_URLS.HOME },
    { path: ROUTER_URLS.HOME, name: "home", component: Home },
    { path: ROUTER_URLS.ABOUT, name: "about", component: About },
    { path: ROUTER_URLS.PROJECTS, name: "projects", component: Projects }
]

export const router = new VueRouter({
    mode: "history",
    routes
});