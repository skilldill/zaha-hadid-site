<template>
    <header class="home-header">
        <div class="description">
            <q>
                Architecture is like writing.
                You have to edit it over and over so it looks effortless.
            </q>
            <p>
                Ed dapibus arcu ut viverra fermentum.
            </p>
        </div>
        <div class="photo">
            <img 
                src="../../../../../assets/home/home-header.png"
                alt="Zaha Hadid"
            >
        </div>
    </header>
</template>
<script>
export default {
    name: "HomeHeader"
}
</script>
<style lang="scss" scoped>
.home-header {
    width: 100%;
    padding-top: 100px;

    .description {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        q {
            width: 560px;
            font-size: 36px;
        }

        p {
            width: 191px;
            color: #7C7B7B;
            font-size: 16px;
            margin: 0;
        }
    }

    .photo {
        margin-top: 55px;
        width: 100%;
        background-color: rgba(111, 167, 204, 0.2);
        
        img {
            width: 100%;
        }
    }
}
</style>