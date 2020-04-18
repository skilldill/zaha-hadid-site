<template>
    <header class="home-header">
        <div class="description">
            <div :class="{'q-wrap': true, 'fadein-q-wrap': showContentQ}">
                <q>
                    Architecture is like writing.
                    You have to edit it over and over so it looks effortless.
                </q>
            </div>
            <div :class="{'p-wrap': true, 'fadein-p-wrap': showContentP}">
                <p>     
                    Zaha Hadid (1950-2016)
                    AA Dipl, RIBA, ARB, BDA, Hon.F.AIA
                </p>
            </div>
        </div>
        <div class="photo-wrap">
            <div :class="{photo: true, 'fadein-photo': showPhoto}">
                <img 
                    src="../../../../../assets/home/home-header.png"
                    alt="Zaha Hadid"
                    :class="{ showPhoto }"
                >
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: "HomeHeader",
    data() {
        return {
            showPhoto: false,
            showContentQ: false,
            showContentP: false
        }
    },
    created() {
        setTimeout(() => { this.showContentQ = true }, 300);
        setTimeout(() => { this.showContentP = true }, 500)
        setTimeout(() => { this.showPhoto = true }, 900);
    }
}
</script>
<style lang="scss" scoped>
.home-header {
    width: 100%;
    padding-top: 100px;

    .photo-wrap {
        width: 1400px;
        height: 600px;
        margin-top: 55px;

        .photo {
            background-color: white;
            overflow: hidden;
            position: relative;
            width: 1400px;
            height: 0px;
            transition: all 1s;

            img {
                top: 0;
                left: 0;
                position: absolute;
                opacity: 0;
                transition: all 1s;
            }

            .showPhoto { 
                opacity: 1;
            }
        }

        .fadein-photo {
            height: 600px;
        }
    }

    .description {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        .q-wrap {
            width: 0px;
            transition: all .4s;
            overflow: hidden;

            q {
                display: block;
                width: 560px;
                font-size: 36px;
                line-height: 45px;
            }
        }

        .fadein-q-wrap {
            width: 560px;
        }

        .p-wrap {
            width: 0px;
            overflow: hidden;
            transition: all .4s;

            p {
                width: 278px;
                color: #7C7B7B;
                font-size: 16px;
                margin: 0;
                text-align: right;
                line-height: 20px;
            }
        }

        .fadein-p-wrap {
            width: 278px;
        }
    }
}
</style>