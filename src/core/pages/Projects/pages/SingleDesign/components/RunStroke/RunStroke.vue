<template>
    <div class="strokes">
        <h1 class="run-stroke" v-if="showFirst">{{text}}</h1>
        <h1 class="run-stroke" v-if="showSecond">{{text}}</h1>
        <h1 class="run-stroke" v-if="showThrihd">{{text}}</h1>
        <!-- <h1 class="run-stroke" v-if="showForth">{{text}}</h1> -->
    </div>
</template>
<script>
export default {
    name: "RunStroke",
    props: {
        text: {
            type:String,
            required: true
        }
    },
    data() {
        return {
            showFirst: true,
            showSecond: false,
            showThrihd: false,
            showForth: false,
        }
    },
    created() {
        setTimeout(() => { this.showSecond = true }, 5000);
        setTimeout(() => { this.showThrihd = true }, 10000);
        // setTimeout(() => { this.showForth = true }, 6000);
    }
}
</script>
<style lang="scss" scoped>
@keyframes strokeRun {
    0% {
        left: 1500px;
        // transform: translateX(1000px);
    }
    100% {
        left: -1500px
        // transform: translateX(-1000px);
    }
}
.strokes {
    display: flex;
    position: relative;

    .run-stroke {
        position: absolute;

        margin: 0;
        letter-spacing: 1px;
        font-weight: 500;
        font-size: 300px;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: #000000 1px;
        margin-right: 45px;
        margin-left: 45px;
        animation: strokeRun 15s infinite linear;
    }
}
</style>