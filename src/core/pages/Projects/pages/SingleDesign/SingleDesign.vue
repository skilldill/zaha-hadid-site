<template>
    <div class="single-design">
        <div class="title">
            <app-run-stroke :text="design.name"/>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
import { RunStroke } from "./components/RunStroke";

export default {
    name: "SingleDesign",
    components: {
        'app-run-stroke': RunStroke
    },
    data() {
        return {
            design: null,
            titleLength: 924
        }
    },
    computed: {
        ...mapState({
            designs: (state) => state.design.designs
        })
    },
    methods: {
        writeWord() {
        }
    },
    created() {
        const { id } = this.$route.params;
        this.design = this.designs[id];
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
    }
}
</style>