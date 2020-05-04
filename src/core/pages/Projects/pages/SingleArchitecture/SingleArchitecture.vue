<template>
    <div class="single-architecture" v-if="!!architecture">
        <div class="header">
            <div class="header-description">
                <h1 class="title">{{architecture.name}}</h1>
                <p 
                    class="description"
                    v-for="(part, index) in architecture.additional.descriptionParts"
                    :key="index"
                >{{part}}</p>
                <div class="coordinates-block">
                    <p 
                        class="coordinates"
                        v-for="(item, index) in architecture.additional.coordinates"
                        :key="index"
                    >
                        {{item}}
                    </p>
                </div>
            </div>
            <div class="poster">
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
import { mapState } from "vuex";

export default {
    name: "SingleArchitecture",
    data() {
        return {
            architecture: null
        }
    },
    computed: {
        ...mapState({
            architectures: state => state.architecture.architectures
        })
    },
    created() {
        this.architecture = this.architectures[this.$route.params.id];
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
        }

        .description {
            width: 432px;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
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
        }
    }

    .gallery {
        .photo {
            margin-top: 120px;
        }
    }
}
</style>