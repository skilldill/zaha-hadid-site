<template>
    <div 
        :class="{
            'interior-design-item': true,
            'interior-design-item-reverse': reverse
        }"
    >
        <div 
            :class="{
                'description': true,
                'description-show': showDescription,
                'description-black': descriptionBlack
            }"
        >
            <h1>{{ interior.name }}</h1>
            <h3>{{ interior.place }}</h3>
        </div>
        <div :class="{
                'picture': true,
                'picture-show': showPicture
            }"
        >
            <img :src="interior.poster" :alt="interior.name">
        </div>
    </div>
</template>
<script>
export default {
    name: "InteriorDesignItem",
    props: {
        interior: {
            type: Object,
            required: true
        },
        reverse: Boolean,
        delay: {
            type: Number,
            default: 100
        }
    },
    data() {
        return {
            showPicture: false,
            showDescription: false,
            descriptionBlack: false
        }
    },
    created() {
        setTimeout(() => { 
            this.showPicture = true;
            this.showDescription = true;
        }, this.delay);

        setTimeout(() => { this.descriptionBlack = true }, this.delay + 500);
    }
}
</script>
<style lang="scss" scoped>
.interior-design-item {
    display: flex;
    align-items: center;
    margin-top: 150px;

    .picture {
        opacity: 0;
        transition: all .8s;
        // overflow: hidden;
        
        img {
            transform: scale(.9);
            transition: all .8s;
        }
    }

    .picture-show {
        opacity: 1;

        img {
            transform: scale(1);
        }
    }

    .description {
        opacity: 0;
        transition: all .8s;

        h1 {
            color: rgba(111, 167, 204, 0.603);
            font-style: normal;
            font-weight: normal;
            font-size: 100px;
            line-height: 100px;
            transition: all .8s;
        }

        h3 {
            color: rgba(111, 167, 204, 0.603);
            font-style: normal;
            font-weight: normal;
            font-size: 50px;
            line-height: 50px;
            transition: all .8s;
        }
    }

    .description-show {
        opacity: 1;
    }

    .description-black {
        h1, h3 {
            color: #000;
        }
    }
}

.interior-design-item-reverse {
    flex-direction: row-reverse;

    .description {
        margin-left: 127px;
    }
}
</style>