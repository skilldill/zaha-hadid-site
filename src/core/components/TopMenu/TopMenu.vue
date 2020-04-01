<template>
    <nav class="top-menu">
        <router-link :to="urls.HOME">
            <img src="../../../assets/logo.svg" alt="Zaha Hadid Architects logo worlds">
        </router-link>
        <ul class="menu-items">
            <app-menu-item>
                <router-link :to="urls.ABOUT">About us</router-link>
            </app-menu-item>
            <app-menu-item>
                <router-link to="/about">Projects</router-link>
            </app-menu-item>
            <app-menu-item class="menu-item">
                <router-link to="/about">Career</router-link>
            </app-menu-item>
            <app-menu-item class="menu-item">
                <router-link to="/about">Our team</router-link>
            </app-menu-item>
            <app-menu-item class="menu-item">
                <router-link to="/about">News</router-link>
            </app-menu-item>
            <app-menu-item class="menu-item">
                <router-link to="/about">Publications</router-link>
            </app-menu-item>
            <app-menu-item class="menu-item">
                <router-link to="/about">Contacts</router-link>
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
    }
}
</script>
<style lang="scss" scoped>
.top-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .menu-items {
        display: flex;

        .menu-item {
            list-style-type: none;
            margin-left: 52px;
        
            a {
                color: black;
                text-decoration: none;
                font-size: 16px;
            }
        }
    }
}
</style>