<template>
    <div class="architectures-list">
        <app-architecture-item
            v-for="architecture in architectures"
            :key="architecture.name"
            :architecture="architecture"
        />
    </div>
</template>
<script>
import { mapState } from "vuex";
import { ArchitectureItem } from "../ArchitectureItem";

export default {
    name: "ArchitectureList",
    components: {
        "app-architecture-item": ArchitectureItem
    },
    computed: mapState({
        architectures: (state) => state.architecture.architectures
    })
}
</script>
<style lang="scss" scoped>
.architectures-list {
    position: absolute;
    top: 333px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>