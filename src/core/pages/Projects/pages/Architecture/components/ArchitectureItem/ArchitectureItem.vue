<template>
    <div class="architecture-item">
        <img :src="architecture.picture" :alt="architecture.name">
        <div class="content">
            <h3>{{architecture.name}}</h3>
            <p class="place">{{architecture.place}}</p>
            <p class="range">{{architecture.range}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "ArchitectureItem",
    props: {
        architecture: Object
    }
}
</script>
<style lang="scss" scoped>
.architecture-item {
    width: 390px;
    margin-bottom: 70px;
    
    img {

    }

    .content {
        h3 {
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            margin-top: 19px;
            margin-bottom: 0;
        }

        .place {
            margin-top: 13px;
            margin-bottom: 0;
            font-size: 14px;
        }

        .range {
            margin-top: 10px;
            margin-bottom: 0;
            font-size: 14px;
        }
    }
}
</style>