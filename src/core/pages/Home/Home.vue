<template>
    <div class="home">
        <app-home-header />
        <app-home-description />
        <app-home-bottom />
    </div>
</template>
<script>
import { HomeHeader, HomeDescription, HomeBottom } from "./blocks";

export default {
    name: "Home",
    components: {
        "app-home-header": HomeHeader,
        "app-home-description": HomeDescription,
        "app-home-bottom": HomeBottom
    }
}
</script>
<style lang="scss" scoped>

</style>