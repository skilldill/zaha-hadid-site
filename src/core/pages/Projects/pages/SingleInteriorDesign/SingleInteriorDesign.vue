<template>
    <div v-if="!!design" class="singl-interior-design">
        <div class="header">
            <div 
                :class="{
                    'poster': true,
                    'poster-show': showPoster && !startChangeRoute
                }"
            >
                <img :src="design.additional.poster" :alt="design.name">
            </div>
            <h1 
                :class="{
                    'title': true,
                    'title-show': showTitle && !startChangeRoute
                }"
            >{{design.name}}</h1>
        </div>
        <div 
            :class="{
                'middle': true,
                'middle-show': showPoster && !startChangeRoute
            }"
        >
            <div class="part">
                <p 
                    :class="{
                        'description': true
                    }"
                >{{design.additional.description}}</p>
                <div 
                    :class="{
                        'picture': true
                    }"
                >
                    <img :src="design.additional.photos[1]" :alt="design.name">
                </div>
            </div>
            <div class="part part-right">
                <div class="picture">
                    <img :src="design.additional.photos[0]" :alt="design.name">
                </div>
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
                <img :src="design.additional.photos[2]" :alt="design.name">
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
    name: "SingleInteriorDesign",
    data() {
        return {
            design: null,
            showPoster: false,
            showTitle: false
        }
    },
    computed: {
        ...mapState({
            designs: (state) => state.interiorDesigns.designs,
            startChangeRoute: (state) => state.stateRoutes.startChangeRoute
        })
    },
    methods: {
        ...mapMutations(['setStartChangeRoute'])
    },
    created() {
        this.setStartChangeRoute(false);
        this.design = this.designs[this.$route.params.id];

        setTimeout(() => { this.showTitle = true }, 10);
        setTimeout(() => { this.showPoster = true }, 300);
    }
}
</script>
<style lang="scss" scoped>
.singl-interior-design {
    padding-bottom: 100px;

    .header {
        position: relative;
        margin-top: 90px;

        .poster {
            opacity: 0;
            transform: translateX(150px);
            transition: all 1s;
        }

        .poster-show {
            opacity: 1;
            transform: translateX(0px);
        }
        
        .title {
            position: absolute;
            font-weight: 500;
            font-size: 250px;
            line-height: 200px;
            left: 215px;
            top: 172px;
            margin-top: 0;
            opacity: 0;
            transform: translateX(-50px);
            transition: all .8s;
        }

        .title-show {
            opacity: 1;
            transform: translateX(0px);
        }
    }

    .middle {
        margin-top: 93px;
        display: flex;
        justify-content: space-between;

        p {
            margin: 0;
            margin-bottom: 90px;
            width: 487px;
            font-size: 16px;
            line-height: 24px;
        }

        opacity: 0;
        transition: all 1s;
    }

    .middle-show {
        opacity: 1;
    }

    .bottom {
        margin-top: 107px;
        display: flex;
        justify-content: space-between;
    }
}
</style>