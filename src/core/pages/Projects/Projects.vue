<template>
    <div class="projects">
        <div class="projects-menu-content" v-if="showMenuBlock">
            <app-projects-menu class="wrapper-projects-menu" />
            <div 
                :class="{
                    'picture': true, 
                    'picture-loaded': loaded,
                    'fade-out-picture': loaded && startChangeRoute
                }"
            >
                <img src="../../../assets/projects/projects_wall.png" alt="zaha hadid building">
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import { ProjectsMenu } from "./components";
import { mapState } from "vuex";

export default {
    name: "Projects",
    components: {
        "app-projects-menu": ProjectsMenu
    },
    data() {
        return {
            loaded: false,
            showMenuBlock: true
        }
    },
    watch: {
        $route() {
            // Проверка можно ли показывать меню блок Projects
            const { path } = this.$route;
            const routeParts = path.split("/");
            this.showMenuBlock = !(routeParts.length >= 3);
        }
    },
    computed: mapState({
        startChangeRoute: state => state.stateRoutes.startChangeRoute
    }),
    created() {
        setTimeout(() => { 
            this.loaded = true;
        }, 10);
    }
}
</script>
<style lang="scss" scoped>
.projects {
    .picture {
        position: absolute;
        top: 224px;
        right: -100px;
        width: 940px;
        height: 930px;
        overflow: hidden;
        transition: all .8s;
        opacity: 0;

        img {
            transition: all .8s;
            transform: scale(1.5);
        }
    }

    .wrapper-projects-menu {
        position: absolute;
        z-index: 1;
        top: 331px;
    }

    .picture-loaded {
        opacity: 1;
        img {
            transform: scale(1);
        }
    }

    .fade-out-picture {
        opacity: 0;
    }
}
</style>