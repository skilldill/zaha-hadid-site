<template>
    <li class="menu-item"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"    
    >
        <slot></slot>
        <div 
            class="decoration"
            :class="{hovered: isHovered}"
        ></div>
    </li>
</template>
<script>
export default {
    name: "MenuItem",
    data() {
        return {
            isHovered: false
        }
    },
    methods: {
        handleMouseMove() { this.isHovered = true },
        handleMouseLeave() { this.isHovered = false }
    }
}
</script>
<style lang="scss" scoped>
.decoration {
    background-color: #6FA7CC;
    width: 0px;
    height: 2px;
    transition: all .3s;
    margin-top: 2px;
}

.hovered {
    width: calc(100% + 0px);
}
</style>