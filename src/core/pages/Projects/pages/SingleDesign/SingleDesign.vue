<template>
    <div class="single-design">
        <div 
            :class="{
                'title': true,
                'title-show': showTitle && !startChangeRoute
            }"
        >
            <app-run-stroke :text="design.name"/>
        </div>
        <div 
            :class="{
                'header': true,
                'header-show': showHeader && !startChangeRoute
            }">
            <p>{{design.additional.description}}</p>
            <div class="poster">
                <img 
                    :src="design.additional.poster" 
                    :alt="design.name"
                >
            </div>
        </div>
        <div class="middle">
            <div class="picture">
                <img 
                    :src="design.additional.photoMiddle" 
                    :alt="design.name"
                >
            </div>
        </div>
        <div class="bottom">
            <div class="coordinates">
                <p
                    v-for="(item, index) in design.additional.coordinates"
                    :key="index"
                >{{item}}</p>
            </div>
            <div class="picture">
                <img 
                    :src="design.additional.photoBottom" 
                    :alt="design.name"
                >
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { RunStroke } from "./components/RunStroke";

export default {
    name: "SingleDesign",
    components: {
        'app-run-stroke': RunStroke
    },
    data() {
        return {
            design: null,
            titleLength: 924,
            showTitle: false,
            showHeader: false
        }
    },
    computed: {
        ...mapState({
            designs: (state) => state.design.designs,
            startChangeRoute: (state) => state.stateRoutes.startChangeRoute
        })
    },
    methods: {
        ...mapMutations(['setStartChangeRoute'])
    },
    created() {
        this.setStartChangeRoute(false);

        const { id } = this.$route.params;
        this.design = this.designs[id];

        setTimeout(() => { this.showHeader = true }, 300);
        setTimeout(() => { this.showTitle = true }, 1000);
    }
}
</script>
<style lang="scss" scoped>
.single-design {
    .title {
        overflow: hidden;
        height: 300px;
        margin-top: 200px;
        display: flex;
        transform: translate(-100px);
        width: calc(100% + 200px);
        opacity: 0;
        transition: all 1.3s;
    }

    .title-show {
        opacity: 1;
    }

    .header {
        margin-top: 83px;
        display: flex;
        justify-content: space-between;

        .poster {
            margin-top: 320px;
            transform: translateX(100px);
        }

        p {
            width: 614px;
            font-size: 36px;
            line-height: 40px;
            margin: 0;
            padding: 0;
        }

        transition: all .8s;
        opacity: 0;
    }

    .header-show {
        opacity: 1;
    }

    .middle {
        margin-top: 100px;
    }

    .bottom {
        position: relative;
        width: 100%;
        margin-top: 132px;
        margin-bottom: 100px;
        display: flex;
        justify-content: flex-end;
        
        .coordinates {
            position: absolute;
            bottom: 0;
            left: 0;

            p {
                margin: 0;
                color: #767676;
                font-size: 16px;
                line-height: 24px;
            }
        }
    }
}
</style>