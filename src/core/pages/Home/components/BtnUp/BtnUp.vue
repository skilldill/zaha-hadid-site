<template>
    <button
        class="btn-up" 
        @mouseenter="handleEnter" 
        @mouseleave="handleLeave"
        @click="$emit('click', $event)"
    >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="15.576" y1="2.54297" x2="15.576" y2="29.6952" :stroke="strokeColor" stroke-width="2" style="transition: all .3s"/>
            <path d="M1 15.5761L15.1192 2L29 15.5761" :stroke="strokeColor" stroke-width="2" style="transition: all .3s"/>
        </svg>
    </button>
</template>
<script>
export default {
    name: "BtnUp",
    props: {
        onClick: Function
    },
    data() {
        return {
            strokeColor: "#767676"
        }
    },
    methods: {
        handleEnter() { this.strokeColor = "#ffffff" },
        handleLeave() { this.strokeColor = "#767676" },
        handleClick(event) { this.onClick && this.onClick(event) }
    }
}
</script>
<style scoped>
.btn-up {
    background-color: transparent;
    border: 2px solid #767676;
    width: 166px;
    height: 50px;
    outline: none;
    transition: all .3s;

   
}
.btn-up :hover {
    background-color: #767676;
    color: white;
}
</style>