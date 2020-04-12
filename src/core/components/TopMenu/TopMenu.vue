<template>
    <nav class="top-menu">
        <router-link :to="urls.HOME">
            <img src="../../../assets/logo.svg" alt="Zaha Hadid Architects logo worlds">
        </router-link>
        <app-finder v-if="showFilnder"/>
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
import { Finder } from "../../../shared/components/Finder";
import { MenuItem } from "./components/MenuItem";
import { ROUTER_URLS } from "../../../shared/constants";

export default {
    name: "TopMenu",
    components: {
        "app-menu-item": MenuItem,
        "app-finder": Finder
    },
    data() {
        return {
            urls: ROUTER_URLS,
            showFilnder: false
        }
    },
    computed: {
        routePath() { return this.$router.currentRoute.path },
        isArchitecture() { 
            return this.$router.currentRoute.path.indexOf("architecture") !== -1;
        }
    },
    watch: {
        // Проверяем когда показать поисковую строку
        $route() {
            this.showFilnder = 
                this.$route.path.indexOf("architecture") !== -1 ||
                this.$route.path.indexOf("design") !== -1
        }
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