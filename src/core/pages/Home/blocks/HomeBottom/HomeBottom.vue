<template>
    <div class="home-bottom">
        <div class="part">
            <div class="photo-zaha">
                <img src="../../../../../assets/home/home-bottom-zaha.png" alt="zaha-hadid">
            </div>
        </div>
        <div class="part">
            <div class="photo-steps">
                <img src="../../../../../assets/home/home-bottom-steps.png" alt="steps">
            </div>
            <div class="control">
                <app-btn-up @click="handleClickUp" />
            </div>
        </div>
    </div>
</template>
<script>
import { BtnUp } from "../../components";

export default {
    name: "HomeBottom",
    components: {
        "app-btn-up": BtnUp
    },
    methods: {
        handleClickUp() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.home-bottom {
    margin-top: 106px;
    display: flex;
    padding-bottom: 63px;

    .part {
        flex: 1;
    }

    .photo-zaha {
        overflow: hidden;
        img {
            transition: all .3s;
            width: 550px;

            &:hover {
                transform: rotate(360deg);
            }
        }
    }

    .photo-steps {
        margin-top: 320px;
        width: 100%;

        img {
            width: 100%;
        }
    }

    .control {
        display: flex;
        justify-content: center;
        margin-top: 45px;

        
    }
}

@media screen and (min-width: 1400px) {
    .home-bottom {
        .photo-steps {
            img {
                width: 760px;
            }
        }
    }
}
</style>