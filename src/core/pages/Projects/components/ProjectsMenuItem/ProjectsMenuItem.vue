<template>
    <div class="projects-menu-item">
        <a 
            :href="path ? path : '#'"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
        >
            <div :class="{ 'effect-content': true, 'effect-content-hover': hovered }">
                <span>
                    {{ content }}
                </span>
            </div>
            <div class="content">
                {{ content }}
            </div>
        </a>
    </div>
</template>
<script>
export default {
    name: "ProjectsMenuItem",
    props: {
        content: {
            required: true,
            type: String
        },
        path: String
    },
    data() {
        return {
            hovered: false
        }
    },
    methods: {
        handleMouseEnter(event) { 
            this.$emit('mouseenter', event);
            this.hovered = true;
        },
        handleMouseLeave(event) { 
            this.hovered = false;
            this.$emit('mouseleave', event);
        }
    }
}
</script>
<style lang="scss" scoped>
.projects-menu-item {
    margin-bottom: 20px;
    cursor: pointer;
    
    a {
        display: flex;
        position: relative;
        font-size: 150px;
        font-weight: 500;
        color: #000;
        text-decoration: none;
    }

    .effect-content {
        position: absolute;
        overflow: hidden;
        transition: all .5s;
        width: calc(100% - 0px);

        span {
            display: block;
            width: 1100px;
        }
    }

    .effect-content-hover {
        width: 0px;
    }

    .content {
        color: #6FA7CC;
    }
}
</style>