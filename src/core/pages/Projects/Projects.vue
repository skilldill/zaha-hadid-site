<template>
    <div class="projects">
        <app-projects-menu class="wrapper-projects-menu" />
        <div :class="{'picture': true, 'picture-loaded': loaded}">
            <img src="../../../assets/projects/projects_wall.png" alt="zaha hadid building">
        </div>
    </div>
</template>
<script>
import { ProjectsMenu } from "./components";

export default {
    name: "Projects",
    components: {
        "app-projects-menu": ProjectsMenu
    },
    data() {
        return {
            loaded: false,
        }
    },
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
}
</style>