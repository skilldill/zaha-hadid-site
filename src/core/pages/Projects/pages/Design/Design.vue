<template>
    <div class="design">
        <div :class="{'title': true, 'title-loaded': titleLoaded && !startChangeRoute}">
            <h1>Design</h1>
        </div>
        <app-design-list />
    </div>
</template>
<script>
import { DesignList } from "./components/DesignList";
import { mapState } from 'vuex';

export default {
    name: "Design",
    components: {
        "app-design-list": DesignList
    },
    data() {
        return {
            titleLoaded: false
        }
    },
    computed: {
        ...mapState({
            startChangeRoute: (state) => state.stateRoutes.startChangeRoute
        })
    },
    created() {
        setTimeout(() => { this.titleLoaded = true }, 100);
    }
}
</script>
<style lang="scss" scoped>
.design { 
    position: relative;
    
    .title {
        position: absolute;
        left: -15px;
        top: 70px;
        height: 400px;
        overflow: hidden;
        width: 4px;
        transition: all .8s;

        h1 {
            color: rgba(111, 167, 204, 0.2);
            font-style: normal;
            font-weight: 500;
            font-size: 288px;
            line-height: 90px;
            width: 1000px;
            transition: all .8s;
            margin-top: 100px;
            margin-bottom: 100px;
        }

        .line {
            position: absolute;
            height: 0px;
            height: 0px;
            width: 2px;
            top: 0px;
            background-color: #8f8f8f;
            transition: all .4s;
        }
        
        .line-left {
            left: 0;
        }

        .line-right {
            right: 0;
        }

        .line-show {
            height: 240px;
        }
    }

    .title-loaded {
        width: 950px;
    }
}
</style>