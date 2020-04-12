<template>
    <div :class="{ 'projects-menu': true, 'projects-menu-open': openedMenu }">
        <div class="items">
            <app-projects-menu-item 
                content="Architecture"
                :path="`projects/${urls.ARCHITECTURE}`"
            />
            <app-projects-menu-item 
                content="Interior Design"
                :path="`projects/${urls.INTERIOR_DESIGN}`"
            />
            <app-projects-menu-item 
                content="Design"
                :path="`projects/${urls.DESIGN}`"
            />
            <app-projects-menu-item 
                content="Masterplans"
                :path="`projects/${urls.MASTERPLANS}`"
            />
        </div>
    </div>
</template>
<script>
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
            urls: PROJECTS_ROUTER_URLS
        }
    },
    created() {
        setTimeout(() => {
            this.openedMenu = true;
        }, 500);
    }
}
</script>
<style lang="scss" scoped>
.projects-menu {
    position: relative;
    transition: all 1s;
    overflow: hidden;
    height: 1px;
    opacity: 0;

    .border-top { top: 0px }
    .border-bottom { bottom: 0px }
    .hide-border { width: 0px }

    .items {
        margin: 0;
        padding: 0;

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
</style>