<template>
    <div :class="{
            'architectures-list': true,
            'architectures-list-show': isShow
        }"
    >
        <app-architecture-item
            v-for="(architecture, index) in architectures"
            :key="architecture.name"
            :architecture="architecture"
            :id="index"
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
    props: {
        isShow: {
            type: Boolean,
            default: true
        }
    },
    computed: { 
        ...mapGetters({ architectures: "foundArchitectures" }),
    }
}
</script>
<style lang="scss" scoped>
.architectures-list {
    opacity: 0;
    position: absolute;
    top: 270px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    transition: all .5s;
}
.architectures-list-show {
    opacity: 1;
}
</style>