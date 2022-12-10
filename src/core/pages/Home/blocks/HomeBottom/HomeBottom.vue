<template>
    <div class="home-bottom">
        <div class="part">
            <div class="photo-zaha">
                <img 
                    style="margin-top: 20px"
                    src="../../../../../assets/home/home-bottom-zaha.png" 
                    alt="zaha-hadid"
                >
            </div>
        </div>
        <div class="part">
            <p class="description-bottom">
                Many architects are called on to create new projects that stand as symbols of social progress—but none delivered as regularly, as unexpectedly and as spectacularly as Zaha Hadid. 
            </p>
            <div class="photo-steps">
                <img 
                    style="margin-top: 20px"
                    src="../../../../../assets/home/home-bottom-steps.png" 
                    alt="steps"
                    width="700"
                >
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
<style scoped>
.home-bottom {
    margin-top: 220px;
    display: flex;
    padding-bottom: 63px;
}

.part {
    flex: 1;       
}

.description-bottom {
    width: 450px;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
}

.photo-zaha {
    overflow: hidden;
    
}

.photo-zaha img {
    transition: all .3s;
    width: 550px;
}

.photo-steps {
    margin-top: 108px;
    width: 100%;
}

.photo-steps img {
    width: 700px;
}

.control {
    display: flex;
    justify-content: center;
    margin-top: 45px;
}

@media screen and (min-width: 1400px) {
    .home-bottom .photo-steps img {
        width: 700px;
    }
}
</style>