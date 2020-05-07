<template>
    <div class="single-architecture" v-if="!!architecture">
        <div class="header">
            <div class="header-description">
                <h1 
                    :class="{
                        'title': true, 
                        'title-show': descriptionShow && !startChangeRoute
                    }"
                >{{architecture.name}}</h1>
                <p 
                    :class="{
                        'description': true, 
                        'description-show': descriptionShow && !startChangeRoute
                    }"
                    v-for="(part, index) in architecture.additional.descriptionParts"
                    :key="index"
                >{{part}}</p>
                <div class="coordinates-block">
                    <p 
                        :class="{
                            'coordinates': true, 
                            'coordinates-show': descriptionShow && !startChangeRoute
                        }"
                        v-for="(item, index) in architecture.additional.coordinates"
                        :key="index"
                    >
                        {{item}}
                    </p>
                </div>
            </div>
            <div 
                :class="{
                    'poster': true, 
                    'poster-show': posterShow && !startChangeRoute
                }">
                <img 
                    :src="architecture.additional.poster" 
                    :alt="architecture.name"
                >
            </div>
        </div>
        <div 
            class="gallery"
            v-for="(photo, index) in architecture.additional.photos"
            :key="index"   
        >
            <div 
                class="photo"
            >
                <img :src="photo" alt="architecture">
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
    name: "SingleArchitecture",
    data() {
        return {
            architecture: null,
            posterShow: false,
            descriptionShow: false
        }
    },
    computed: {
        ...mapState({
            architectures: state => state.architecture.architectures,
            startChangeRoute: state => state.stateRoutes.startChangeRoute
        })
    },
    methods: {
        ...mapMutations(['setStartChangeRoute'])
    },
    created() {
        this.setStartChangeRoute(false);
        this.architecture = this.architectures[this.$route.params.id];
        setTimeout(() => { this.descriptionShow =true }, 50)
        setTimeout(() => { this.posterShow = true }, 300);
    }
}
</script>
<style lang="scss" scoped>
.single-architecture {
    margin-top: 200px;

    .header {
        display: flex;
        position: relative;

        .title {
            margin: 0px;
            margin-bottom: 45px;
            font-style: normal;
            font-weight: normal;
            font-size: 100px;
            line-height: 100px;
            letter-spacing: 1px;
            color: #000000;
            transform: translateY(-50px);
            opacity: 0;
            transition: all 1.1s;
        }

        .title-show {
            transform: translateY(0px);
            opacity: 1;
        }

        .description {
            width: 432px;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            transform: translate(50px);
            opacity: 0;
            transition: all 1.1s;
        }

        .description-show {
            transform: translate(0px);
            opacity: 1;
        }

        .coordinates-block {
            position: absolute;
            bottom: 0;
            left: 0;
        }

        .coordinates {
            margin: 0;
            line-height: 24px;
            font-size: 16px;
            color: #767676;
            opacity: 0;
            transition: all 1.1s;
        }

        .coordinates-show {
            opacity: 1;
        }

        .poster {
            width: 760px;
            height: 936px;
            overflow: hidden;

            img {
                transition: all 1.1s;
                transform: scale(1.2);
                opacity: 0;
            }
        }

        .poster-show {
            img {
                transform: scale(1);
                opacity: 1;
            }
        }
    }

    .gallery {
        .photo {
            margin-top: 120px;
        }
    }
}
</style>