<template>
    <div class="finder">
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
import { mapMutations } from "vuex";

export default {
    name: "Finder",
    data() {
        return {
            findValue: "",
            focused: false
        }
    },
    computed: {
        showIcon() {
            return !!this.findValue.length || this.focused;
        }
    },
    methods: {
        ...mapMutations([ 'changeQuery' ]),
        handleFocus() { return this.focused = true },
        handleBlur() { return this.focused = false },
        handleInput(event) {
            this.changeQuery(event.currentTarget.value);
        }
    }
}
</script>
<style lang="scss" scoped>
.finder {
    margin-left: 70px;

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
</style>