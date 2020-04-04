<template>
    <div class="home">
        <app-home-header />
        <app-home-description />
    </div>
</template>
<script>
import { HomeHeader, HomeDescription } from "./blocks";

export default {
    name: "Home",
    components: {
        "app-home-header": HomeHeader,
        "app-home-description": HomeDescription
    }
}
</script>
<style lang="scss" scoped>

</style>