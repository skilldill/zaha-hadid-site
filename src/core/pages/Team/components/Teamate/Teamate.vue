<template>
    <div
    @click="handleClick" 
    :class="{
        'teamate': true,
        'teamate-show': showTemate
    }">
        <div class="avatar">
            <img 
                :src="teamate.avatar" 
                :alt="teamate.name"
            >
        </div>
        <h3 class="name">{{teamate.name}}</h3>
        <small>{{teamate.position}}</small>
        <small>{{teamate.degree}}</small>
    </div>
</template>
<script>
import { mapMutations } from "vuex";
import { CHANGE_ROUTE_DELAY } from "../../../../../shared/constants";

export default {
    name: "Teamate",
    props: {
        teamate: {
            type: Object,
            required: true
        },
        delay: Number
    },
    data() {
        return {
            showTemate: false
        }
    },
    methods: {
        ...mapMutations(['setStartChangeRoute']),
        handleClick() {
            this.setStartChangeRoute(true);
            setTimeout(() => {
                // Заглушка на одного директора
                this.$router.push('/director/0-0');
            }, CHANGE_ROUTE_DELAY)
        }
    },
    created() {
        setTimeout(() => { this.showTemate = true }, this.delay + 100);
    }
}
</script>
<style lang="scss" scoped>
.teamate {
    margin-right: 93px;
    opacity: 0;
    transition: all .8s;

    .avatar {

    }

    .name {
        font-weight: 500;
        font-size: 18px;
        line-height: 18px;
        margin-bottom: 9px;
    }

    small {
        display: block;
        font-weight: normal;
        font-size: 14px;
        margin-top: 5px;
        margin-bottom: 4px;
        line-height: 14px;
    }
}

.teamate-show {
    opacity: 1;
}
</style>