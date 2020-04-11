<template>
    <div class="projects">
        <app-projects-menu class="wrapper-projects-menu" />
        <div class="picture">
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
    }
}
</script>
<style lang="scss" scoped>
.projects {
    .picture {
        position: absolute;
        top: 224px;
        right: -100px;
    }

    .wrapper-projects-menu {
        position: absolute;
        z-index: 1;
        top: 331px;
    }
}
</style>