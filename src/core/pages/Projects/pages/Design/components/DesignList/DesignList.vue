<template>
    <div 
        :class="{
                'design-list': true,
                'design-list-hide': startChangeRoute
            }"
        >
        <app-design-item 
            v-for="(design, index) in designs"
            :key="index"
            :design="design"
            :delay="index * 500"
        />
    </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import { DesignItem } from "../DesignItem";

export default {
    name: "DesignList",
    components: {
        "app-design-item": DesignItem
    },
    computed: {
        ...mapGetters({
            designs: "foundDesigns"
        }),
        ...mapState({
            startChangeRoute: (state) => state.stateRoutes.startChangeRoute
        })
    },
}
</script>
<style lang="scss" scoped>
.design-list {
    position: absolute;
    top: 265px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    opacity: 1;
    transition: opacity .8s;
}

.design-list-hide {
    opacity: 0;
}
</style>