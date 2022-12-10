<template>
    <div class="about">
        <h1 class="title">About us</h1>
        <div class="top-picture">
            <img src="../../../assets/about/about_header.png" alt="zaha hadid building">
        </div>
        <div class="content">
            <div class="part part-text">
                <p>    
                    We work at all scales and in all sectors.
                    We create transformative cultural, corporate, residential
                    and other spaces that work in synchronicity with their surroundings.
                </p>
                <p>
                    950 projects 44 countries
                </p>
                <p>
                    Welcome to the interactive archive of Zaha Hadid Architects.
                </p>
            </div>
            <div class="part">
                <img src="../../../assets/about/about_content.png" alt="zaha hadid building">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "About"
}
</script>
<style scoped>
.about {
    padding-bottom: 80px;    
}

.title {
    font-weight: 500;
    font-size: 150px;
    margin-bottom: 47px;
    text-align: right;
}

.content {
    margin-top: 110px;
    display: flex; 
}

.part {
    flex: 1;
}

.part p {
    width: 600px;
    font-size: 36px;
    line-height: 35px;
}

.part-text {
    padding-top: 20px;
}
</style>