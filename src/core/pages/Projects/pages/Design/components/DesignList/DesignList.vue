<template>
    <div class="design-list">
        <app-design-item 
            v-for="(design, index) in designs"
            :key="index"
            :design="design"
            :delay="index * 300"
        />
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { DesignItem } from "../DesignItem";

export default {
    name: "DesignList",
    components: {
        "app-design-item": DesignItem
    },
    computed: {
        ...mapGetters({
            designs: "foundDesigns"
        })
    }
}
</script>
<style lang="scss" scoped>
.design-list {
    position: absolute;
    top: 265px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>