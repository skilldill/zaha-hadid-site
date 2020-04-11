<template>
    <div :class="{ 'projects-menu': true, 'projects-menu-open': openedMenu }">
        <div :class="{ 'border border-top': true, 'hide-border': hideBorder }"></div>
        <div class="items">
            <app-projects-menu-item content="Architecture" />
            <app-projects-menu-item content="Interior Design" />
            <app-projects-menu-item content="Design" />
            <app-projects-menu-item content="Masterplans" />
        </div>
        <div :class="{ 'border border-bottom': true, 'hide-border': hideBorder }"></div>
    </div>
</template>
<script>
import { ProjectsMenuItem } from "../ProjectsMenuItem";

export default {
    name: "ProjectsMenu",
    components: {
        "app-projects-menu-item": ProjectsMenuItem
    },
    data() {
        return {
            openedMenu: false,
            hideBorder: false,
        }
    },
    created() {
        setTimeout(() => {
            this.openedMenu = true;
        }, 1000);
        setTimeout(() => {
            this.hideBorder = true;
        }, 1800);
    }
}
</script>
<style lang="scss" scoped>
.projects-menu {
    position: relative;
    transition: all .8s;
    overflow: hidden;
    height: 1px;

    .border {
        left: 0px;
        transition: all .7s;
        position: absolute;
        height: 1px;
        width: calc(100% - 0px);
        background-color: #000;
    }

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
}


</style>