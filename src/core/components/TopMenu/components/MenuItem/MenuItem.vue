<template>
    <li class="menu-item"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"    
    >
        <router-link :to="path">
            <slot></slot>
        </router-link>
        <div 
            class="decoration"
            :class="{active: isHovered || isActive}"
        ></div>
    </li>
</template>
<script>
export default {
    name: "MenuItem",
    props: {
        path: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isHovered: false,
            isActive: false,
        }
    },
    watch: {
        $route () {
            this.isActive = this.$route.path === this.path;
        }
    },
    methods: {
        handleMouseMove() { this.isHovered = true },
        handleMouseLeave() { this.isHovered = false }
    },
    
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

.active {
    width: calc(100% + 0px);
}
</style>