<template>
    <div class="architecture">
        <div :class="{'title': true, 'title-fade-in': showTitle}">
            <h1>Architecture</h1>
        </div>
        <app-architecture-list />
    </div>
</template>
<script>
import { mapMutations } from "vuex";
import { ArchitectureList } from "./components/ArchitectureList";

export default {
    name: "Architecture",
    components: {
        "app-architecture-list": ArchitectureList,
    },
    data() {
        return {
            showTitle: false
        }
    },
    methods: {
        ...mapMutations(['setStartChangeRoute'])
    },
    created() {
        this.setStartChangeRoute(false);
        setTimeout(() => {
            this.showTitle = true;
        }, 10)
    }
}
</script>
<style lang="scss" scoped>
.architecture {
    position: relative;

    .title {
        position: absolute;
        left: -122px;
        top: 10px;
        overflow: hidden;

        // for effect
        height: 0px;
        opacity: 0;
        transition: all 1s;

        h1 {
            color: rgba(111, 167, 204, 0.2);
            font-style: normal;
            font-weight: 500;
            font-size: 288px;
            line-height: 90px;
        }
    }

    .title-fade-in {
        height: 400px;
        opacity: 1;
    }
}

</style>