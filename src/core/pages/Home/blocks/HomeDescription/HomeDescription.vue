<template>
    <div class="home-description">
        <div class="part">
            <div class="content">
                <h1 class="title">Zaha Hadid</h1>
                <p>
                    Zaha Hadid’s pioneering vision redefined architecture for the 21st century and captured imaginations across the globe.
                    Each of her projects transformed notions of what can be achieved in concrete, steel, 
                    and glass; combining her unwavering optimism for the future and belief in the power of invention with advanced design, 
                    material and construction innovations.
                </p>
                <p>
                    Many architects are called on to create new projects that stand as symbols 
                    of social progress—but none delivered as regularly, 
                    as unexpectedly and as spectacularly as Zaha Hadid. 
                </p>
                <!-- TODO: сделать отношение картинок по макеты -->
                <img 
                    src="../../../../../assets/home/home-description-small.png" 
                    alt="architecutre"
                >
            </div>
        </div>
        <div class="part">
            <div class="photo">
                <img 
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
<style lang="scss" scoped>
.home-description {
    display: flex;
    margin-top: 200px;

    .part {
        flex: 1;
    }

    .content {
        width: 550px;
        margin-right: 80px;
        
        .title {
            font-size: 105px;
            font-weight: normal;
            margin: 0;
        }

        p {
            font-size: 16px;
            line-height: 24px;
        }

        img {
            margin-top: 28px;
            width: 100%;
        }
    }

    .photo {
        width: 100%;

        img {
            width: 100%;
        }
    }
}

@media screen and (min-width: 1600px) {
    .home-description {
        .photo {
            img {
                width: 760px;
            }
        }
    }
}
</style>