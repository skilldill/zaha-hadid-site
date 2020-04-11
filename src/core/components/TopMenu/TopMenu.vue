<template>
    <nav class="top-menu">
        <router-link :to="urls.HOME">
            <img src="../../../assets/logo.svg" alt="Zaha Hadid Architects logo worlds">
        </router-link>
        <ul class="menu-items">
            <app-menu-item :path="urls.ABOUT">
                About us
            </app-menu-item>
            <app-menu-item :path="urls.PROJECTS">
                Projects
            </app-menu-item>
            <app-menu-item :path="urls.CAREER">
                Career
            </app-menu-item>
            <app-menu-item :path="urls.TEAM">
                Our team
            </app-menu-item>
            <app-menu-item :path="urls.NEWS">
                News
            </app-menu-item>
            <app-menu-item :path="urls.PUBLICATIONS">
                Publications
            </app-menu-item>
            <app-menu-item :path="urls.CONTACTS">
                Contacts
            </app-menu-item>
        </ul>
    </nav>
</template>
<script>
import { MenuItem } from "./components/MenuItem";
import { ROUTER_URLS } from "../../../shared/constants";

export default {
    name: "TopMenu",
    components: {
        "app-menu-item": MenuItem
    },
    data() {
        return {
            urls: ROUTER_URLS
        }
    },
    computed: {
        routePath() { return this.$router.currentRoute.path }
    } 
}
</script>
<style lang="scss" scoped>
.top-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;

    .menu-items {
        display: flex;
    }
}
</style>