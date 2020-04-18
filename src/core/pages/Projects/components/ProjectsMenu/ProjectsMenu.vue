<template>
    <div 
        :class="{ 
            'projects-menu': true, 
            'projects-menu-open': openedMenu,
            'fade-out-menu': changedRoute
        }"
    >
        <div class="items">
            <app-projects-menu-item 
                content="Architecture"
                :path="`projects/${urls.ARCHITECTURE}`"
                @click="handleClickMenuItem"
            />
            <app-projects-menu-item 
                content="Interior Design"
                :path="`projects/${urls.INTERIOR_DESIGN}`"
                @click="handleClickMenuItem"
            />
            <app-projects-menu-item 
                content="Design"
                :path="`projects/${urls.DESIGN}`"
                @click="handleClickMenuItem"
            />
            <app-projects-menu-item 
                content="Masterplans"
                :path="`projects/${urls.MASTERPLANS}`"
                @click="handleClickMenuItem"
            />
        </div>
    </div>
</template>
<script>
import { mapMutations } from "vuex";
import { ProjectsMenuItem } from "../ProjectsMenuItem";
import { PROJECTS_ROUTER_URLS } from "../../constants";

export default {
    name: "ProjectsMenu",
    components: {
        "app-projects-menu-item": ProjectsMenuItem
    },
    data() {
        return {
            openedMenu: false,
            changedRoute: false,
            urls: PROJECTS_ROUTER_URLS
        }
    },
    created() {
        setTimeout(() => {
            this.openedMenu = true;
        }, 500);
    },
    methods: {
        ...mapMutations(['setStartChangeRoute']),
        handleClickMenuItem(changeRoute) {
            this.changedRoute = true;
            setTimeout(() => this.setStartChangeRoute(true), 500);
            setTimeout(() => { changeRoute() }, 900);
        }
    }
}
</script>
<style lang="scss" scoped>
.projects-menu {
    position: relative;
    transition: all 1s;
    overflow: hidden;
    height: 1px;
    width: 1020px;
    opacity: 0;

    .border-top { top: 0px }
    .border-bottom { bottom: 0px }
    .hide-border { width: 0px }

    .items {
        margin: 0;
        padding: 0;
        width: 1020px;

        .item {
            list-style-type: none;
            margin-bottom: 20px;

            a {
                font-size: 150px;
                font-weight: 500;
                color: #000;
                text-decoration: none;
            }
        }
    }
}

.projects-menu-open {
    height: 750px;
    opacity: 1;
}

.fade-out-menu {
    transition: all .5s;
    width: 0px;
}
</style>