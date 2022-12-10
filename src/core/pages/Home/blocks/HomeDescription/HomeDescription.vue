<template>
    <div class="home-description">
        <div class="part">
            <div class="content">
                <h1 class="title">Zaha Hadid</h1>
                <p style="margin-top: 49px">
                   Zaha Hadid’s pioneering vision redefined architecture for the 
                   21st century and captured imaginations across the globe. 
                   Each of her projects transformed notions of what can be achieved 
                   in concrete, steel, and glass; combining her unwavering optimism for the future and belief in the power
                    of invention with advanced design, material and construction innovations.
                </p>
                <!-- TODO: сделать отношение картинок по макеты -->
                <img 
                    width="530"
                    style="margin-top: 49px"
                    src="../../../../../assets/home/home-description-small.png" 
                    alt="architecutre"
                >
            </div>
        </div>
        <div class="part">
            <div class="photo">
                <img 
                    style="margin-top: 200px"
                    src="../../../../../assets/home/home-description-big.png" 
                    alt="architecutre"
                >
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "HomeDescription"
}
</script>
<style scoped>
.home-description {
    display: flex;
    margin-top: 200px;
}

.part {
    flex: 1;
}

.content {
    width: 550px;
    margin-right: 80px; 
}

.content .title {
    font-size: 105px;
    font-weight: normal;
    margin: 0;
}

.content p {
    width: 450px;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
}

.content img {
    margin-top: 28px;
    width: 100%;
}

.photo {
    width: 100%;
}

.photo img {
    width: 100%;
}

@media screen and (min-width: 1600px) {
    .home-description .photo img {
        width: 760px;
    }
}
</style>