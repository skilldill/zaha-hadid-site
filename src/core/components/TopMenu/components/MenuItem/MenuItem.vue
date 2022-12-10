<template>
    <li class="menu-item"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"    
    >
        <a @click.prevent="handleClick">
            <slot></slot>
        </a>
        <div 
            class="decoration"
            :class="{active: isHovered || isActive}"
        ></div>
    </li>
</template>
<script>
import { mapMutations } from "vuex";
import { CHANGE_ROUTE_DELAY, ROUTER_URLS } from "../../../../../shared/constants";

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
        $route() {
            this.isActive = this.$route.path.indexOf(this.path) !== -1;
        }
    },
    methods: {
        ...mapMutations(['setStartChangeRoute']),
        handleMouseMove() { this.isHovered = true },
        handleMouseLeave() { this.isHovered = false },
        handleClick() {
            this.setStartChangeRoute(true);
            setTimeout(() => this.$router.push(this.path), CHANGE_ROUTE_DELAY);
            
        },
        detectRoute() {
            this.isActive = this.$route.path.indexOf(this.path) !== -1;
            
            // Если находимся на странице элемента
            if (!this.isActive && this.path === ROUTER_URLS.PROJECTS) {
                console.log(1);
                this.isActive = this.$route.path.include('architecture')
            } 
        }
    },
    
}
</script>
<style scoped>
.decoration {
    background-color: #6FA7CC;
    width: 0px;
    height: 2px;
    transition: all .3s;
    margin-top: 2px;
}
.menu-item {
    list-style-type: none;
    margin-left: 52px;

    
}

.menu-item a {
    color: black;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
}

.active {
    width: calc(100% + 0px);
}
</style>