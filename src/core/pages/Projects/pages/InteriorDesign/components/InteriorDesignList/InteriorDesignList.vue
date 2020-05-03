<template>
    <div 
    :class="{
            'interior-design-list': true,
            'interior-design-list-show': isShow
        }"
    >
        <app-interior-design-item 
            v-for="(interior, index) in interiorDesigns"
            :key="index"
            :delay="(index + 1) * 500"
            :interior="interior"
            :reverse="index % 2 !== 0"
        />
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import { InteriorDesignItem } from "../InteriorDesignItem";

export default {
    name: "InteriorDesignList",
    components: {
        "app-interior-design-item": InteriorDesignItem
    },
    props: {
        isShow: {
            type: Boolean,
            default: true
        }
    },
    computed: mapGetters({
        interiorDesigns: "foundInteriorDesigns"
    }),
    created() {}
}
</script>
<style lang="scss" scoped>
.interior-design-list {
    opacity: 0;
    position: absolute;
    top: 135px;
    transition: all .5s;
}

.interior-design-list-show {
    opacity: 1;
}
</style>