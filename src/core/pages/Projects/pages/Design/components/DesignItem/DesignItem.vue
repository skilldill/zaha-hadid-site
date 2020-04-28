<template>
    <div :class="{'design-item': true, 'design-item-loaded': openCurtains}">
        <div :class="{'picture': true, 'picture-show': changeOriginCurtains}">
            <div 
                :class="{
                    'curtains': true,
                    'curtains-open': openCurtains,
                    'curtains-origin-bottom': changeOriginCurtains,
                    'curtains-close': closeCurtains
                }"
            >
            </div>
            <img :src="design.picture" :alt="design.name">
        </div>
        <h3>{{ design.name }}</h3>
        <span>{{ design.place }}</span>
    </div>    
</template>
<script>
export default {
    name: "DesignItem",
    props: {
        design: {
            type: Object,
            required: true
        },
        delay: Number
    },
    data() {
        return {
            openCurtains: false,
            closeCurtains: false,
            changeOriginCurtains: false
        }
    },
    created() {
        setTimeout(() => { this.openCurtains = true }, this.delay + 100);
        setTimeout(() => { this.changeOriginCurtains = true }, this.delay + 900);
        setTimeout(() => { this.closeCurtains = true }, this.delay + 1000);
    }
}
</script>
<style lang="scss" scoped>
.design-item {
    margin-bottom: 130px;

    .picture {
        position: relative;
        height: 800px;

        img {
            opacity: 0;
        }

        .curtains {
            position: absolute;
            height: 800px;
            transform-origin: top;
            transform: scaleY(0);
            top: 0;
            left: 0;
            right: 0;
            background-color: #e6e6e6;
            transition: transform .8s;
        }

        .curtains-open {
            transform: scaleY(1);
        }

        .curtains-origin-bottom {
            transform-origin: bottom;
        }

        .curtains-close {
            transform: scaleY(0);
        }
    }

    .picture-show {
        img {
            opacity: 1;
        }
    }

    h3 {
        margin-top: 35px;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        margin-bottom: 0;
        opacity: 0;
        transition: all .8s;
    }

    span {
        display: block;
        margin-top: 16px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        opacity: 0;
        transition: all .8s;
    }
}

.design-item-loaded {
    h3, span {
        opacity: 1;
    }
}
</style>
