<template>
    <div class="interior-design">
        <div 
            :class="{ 
                'title': true, 
                'title-show': showTitle && !startChangeRoute,
                'title-opacity': setTitleOpacity
            }"
        >
            <h1>Interior Design</h1>
        </div>
        <app-interior-design-list :isShow="!startChangeRoute" />
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { InteriorDesignList } from "./components";

export default {
    name: "InteriorDesign",
    components: {
        "app-interior-design-list": InteriorDesignList
    },
    data() {
        return {
            showTitle: false,
            setTitleOpacity: false
        }
    },
    computed: mapState({
        startChangeRoute: (state) => state.stateRoutes.startChangeRoute
    }),
    methods: {
        ...mapMutations(['setStartChangeRoute'])
    },
    created() {
        this.setStartChangeRoute(false);
        setTimeout(() => { this.showTitle = true }, 500);
        setTimeout(() => { this.setTitleOpacity = true }, 1000);
    }
}
</script>
<style lang="scss" scoped>
.interior-design {
    position: relative;
    
    .title {
        position: absolute;
        left: -102px;
        top: 10px;
        height: 400px;
        overflow: hidden;
        width: 0px;
        // opacity: 0;
        overflow: hidden;
        transition: all .8s;
        
        h1 {
            color: rgba(111, 167, 204, 0.603);
            font-style: normal;
            font-weight: 500;
            font-size: 288px;
            line-height: 90px;
            width: 2127px;
            transition: all .8s;
        }
    }
    .title-show { width: 2127px }
    .title-opacity {
        h1 {
            color: rgba(111, 167, 204, 0.2);
        }
    }
}
</style>