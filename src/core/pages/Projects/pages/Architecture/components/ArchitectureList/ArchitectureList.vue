<template>
    <div class="architectures-list">
        <app-architecture-item
            v-for="(architecture, index) in architectures"
            :key="architecture.name"
            :architecture="architecture"
            :duration="100 * (index + 5)"
        />
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { ArchitectureItem } from "../ArchitectureItem";

export default {
    name: "ArchitectureList",
    components: {
        "app-architecture-item": ArchitectureItem
    },
    computed: mapGetters({
        architectures: "foundArchitectures"
    })
}
</script>
<style lang="scss" scoped>
.architectures-list {
    position: absolute;
    top: 270px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>