<template>
    <div class="architecture">
        <h1 class="title">Architecture</h1>
        <app-architecture-list />
    </div>
</template>
<script>
import { ArchitectureList } from "./components/ArchitectureList";

export default {
    name: "Architecture",
    components: {
        "app-architecture-list": ArchitectureList,
    }
}
</script>
<style lang="scss" scoped>
.architecture {
    position: relative;

    .title {
        position: absolute;
        color: rgba(111, 167, 204, 0.2);
        font-style: normal;
        font-weight: 500;
        font-size: 288px;
        line-height: 90px;
        left: -122px;
        top: 70px;
    }
}
</style>