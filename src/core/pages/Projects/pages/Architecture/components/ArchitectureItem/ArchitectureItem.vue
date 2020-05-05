<template>
    <div 
        :class="{'architecture-item': true, 'fade-in': visible}"
        @click="handleClick"
    >
        <div class="picture">
            <img :src="architecture.picture" :alt="architecture.name">
        </div>
        <div class="content">
            <h3>{{architecture.name}}</h3>
            <p class="place">{{architecture.place}}</p>
            <p class="range">{{architecture.range}}</p>
        </div>
    </div>
</template>
<script>
import { mapMutations } from "vuex";
import { 
    CHANGE_ROUTE_DELAY, 
    ROUTER_URLS
} from "../../../../../../../shared/constants";

export default {
    name: "ArchitectureItem",
    props: {
        architecture: Object,
        duration: Number,
        id: Number
    },
    data() {
        return {
            visible: false
        }
    },
    created() {
        setTimeout(() => {
            this.visible = true;
        }, this.duration)
    },
    methods: {
        ...mapMutations(['setStartChangeRoute']),
        handleClick() {
            this.setStartChangeRoute(true);
            setTimeout(() => {
                this.$router.push(ROUTER_URLS.ARCHITECTURE_PAGE.replace(':id', this.id));
            }, CHANGE_ROUTE_DELAY);
        }
    }
}
</script>
<style lang="scss" scoped>
.architecture-item {
    width: 390px;
    margin-bottom: 70px;
    transition: all .9s;
    
    // for effect
    opacity: 0;
    transform: translateY(-100px);

    img {
        transition: all .5s;

        &:hover {
            transition: all .5s;
            transform: scale(1.1);
        }
    }

    .picture {
        width: 390px;
        height: 550px;
        overflow: hidden;
    }

    .content {
        h3 {
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            margin-top: 19px;
            margin-bottom: 0;
        }

        .place {
            margin-top: 13px;
            margin-bottom: 0;
            font-size: 14px;
        }

        .range {
            margin-top: 10px;
            margin-bottom: 0;
            font-size: 14px;
        }
    }
}

.fade-in {
    transform: translateY(0px);
    opacity: 1;
}
</style>