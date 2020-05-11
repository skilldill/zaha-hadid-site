<template>
    <div class="teamate">
        <div class="description">
            <div :class="{
                    'avatar': true,
                    'avatar-show': showAvatar && !startChangeRoute
                }"
            >
                <img 
                    :src="director.avatarBig" 
                    :alt="director.name"
                >
            </div>
            <div :class="{
                'about': true,
                'about-show': showAbout && !startChangeRoute
            }">
                <div class="name">
                    <h1>{{director.name}}</h1>
                </div>
                <p class="position">{{director.position}}</p>
                <p class="degree">{{director.degree}}</p>
                <p 
                    class="about-description"
                    v-for="(part, index) in director.description"
                    :key="index"
                >{{part}}</p>
            </div>
        </div>
        <div class="projects">
            <h3 class="title">Involved in Projects</h3>
            <div class="projects-body">
                <div 
                    class="project"
                    v-for="(project, index) in director.projects"
                    :key="index"
                >
                    <div class="poster">
                        <img :src="project.poster" :alt="project.name">
                    </div>
                    <h3>{{project.name}}</h3>
                    <p>{{project.location}}</p>
                </div>
            </div>
            <div class="border"></div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
    name: "TeamatePage",
    data() {
        return {
            director: null,
            showAvatar: false,
            showAbout: false
        }
    },
    computed: {
        ...mapState({
            startChangeRoute: (state) => state.stateRoutes.startChangeRoute,
            directors: (state) => state.directors.directors,
            boardDirectors: (state) => state.directors.boardDirectors
        })
    },
    methods: {
        ...mapMutations(['setStartChangeRoute'])
    },
    created() {
        this.setStartChangeRoute(false);
        const params = this.$route.params.id.split("-");
        
        // В :id урла зашита инфа о том из какого массива забирать
        // директора и id директора 
        // EXAMPLE: 1-5
        const directorsType = parseInt(params[0]);
        const id = parseInt(params[1])

        // 0 - boardDirectors
        if(directorsType === 0) {
            this.director = this.boardDirectors[id];
        } else { 
            this.director = this.directors[id];
        }

        setTimeout(() => { this.showAvatar = true }, 100);
        setTimeout(() => { this.showAbout = true }, 600);
    }
}
</script>
<style lang="scss" scoped>
.teamate {
    margin-top: 146px;
    padding-bottom: 100px;

    .description {
        display: flex;

        .avatar {
            flex: 1;
            width: 500px;
            height: 700px;
            overflow: hidden;

            img {
                transition: all .8s;
                opacity: 0;
                transform: scale(1.2);
            }
        }

        .avatar-show {
            img {
                opacity: 1;
                transform: scale(1);
            }
        }

        .about {
            flex: 1;
            transition: all .8s;
            opacity: 0;

            .name {
                width: 619px;

                h1 {
                    margin-top: 0;
                    margin-bottom: 0;
                    font-weight: normal;
                    font-size: 100px;
                    line-height: 90px;
                }
            }

            .position {
                margin-top: 23px;
                margin-bottom: 0;
                font-weight: 500;
                font-size: 24px;
                line-height: 24px;
            }

            .degree {
                margin-top: 22px;
                margin-bottom: 49px;
                font-weight: normal;
                font-size: 18px;
                line-height: 18px;
                color: #767676;
            }

            &-description {
                margin-bottom: 25px;
                width: 415px;
                font-weight: normal;
                font-size: 16px;
                line-height: 24px;
            }
        }

        .about-show {
            opacity: 1;
        }
    }

    .projects {
        margin-top: 123px;

        .title {
            margin-top: 0px;
            font-weight: normal;
            font-size: 18px;
            line-height: 18px;
            color: #767676;
            margin-bottom: 33px;
        }

        &-body {
            display: flex;
        }

        .project {
            margin-right: 80px;

            h3 {
                margin-top: 33px;
                font-weight: 500;
                font-size: 18px;
                line-height: 18px;
            }

            p {
                margin-top: 13px;
                font-weight: normal;
                font-size: 14px;
                line-height: 14px;
            }
        }

        .border {
            margin-top: 50px;
            width: 100%;
            height: 1px;
            background-color: #C4C4C4;
        }
    }
}
</style>