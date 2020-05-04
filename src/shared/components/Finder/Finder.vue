<template>
    <div :class="{finder: true, 'finder-show': !startChangeRoute && showFinder }">
        <form>
            <div class="control">
                <input 
                    type="text" 
                    autocomplete="off" 
                    v-model="findValue"
                    @focus="handleFocus"
                    @blur="handleBlur"
                    @input="handleInput"
                >
                <img 
                    src="../../../assets/icons/zoomer.svg" 
                    alt="zoomer"
                    v-if="!showIcon"
                >
            </div>
        </form>
    </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";

export default {
    name: "Finder",
    data() {
        return {
            findValue: "",
            focused: false,
            showFinder: false
        }
    },
    computed: {
        showIcon() {
            return !!this.findValue.length || this.focused;
        },
        ...mapState({
            startChangeRoute: (state) => {
                return state.stateRoutes.startChangeRoute;
            }
        })
    },
    methods: {
        ...mapMutations([ 'changeQuery' ]),
        handleFocus() { return this.focused = true },
        handleBlur() { return this.focused = false },
        handleInput(event) {
            this.changeQuery(event.currentTarget.value);
        }
    },
    created() {
        setTimeout(() => { this.showFinder = true }, 100);
    }
}
</script>
<style lang="scss" scoped>
.finder {
    margin-left: 70px;
    opacity: 0;
    transition: opacity .7s;

    .control {
        position: relative;

        input {
            border: none;
            border-bottom: 1px solid #898787;
            width: 246px;
            outline: none;
            font-size: 18px;
            padding-bottom: 10px;
        }

        img {
            position: absolute;
            left: 0px;
            bottom: 10px;
        }
    }
}

.finder-show {
    opacity: 1;
}
</style>