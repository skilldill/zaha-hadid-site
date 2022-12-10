<template>
    <div class="home">
        <app-home-header />
        <app-home-description />
        <app-home-bottom />
    </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import { HomeHeader, HomeDescription, HomeBottom } from "./blocks";

export default {
    name: "Home",
    components: {
        "app-home-header": HomeHeader,
        "app-home-description": HomeDescription,
        "app-home-bottom": HomeBottom
    },
    computed: mapState({
        startChangeRoute: state => state.stateRoutes.startChangeRoute
    }),
    methods: {
        ...mapMutations(['setStartChangeRoute'])
    },
    created() {
        this.setStartChangeRoute(false);
    }
}
</script>
<style scoped>

</style>