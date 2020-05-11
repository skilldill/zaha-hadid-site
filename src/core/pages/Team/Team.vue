<template>
    <div :class="{
        'team': true,
        'team-show': showTeam && !startChangeRoute
    }">
        <div :class="{
            'title': true, 
            'title-top': true,
            'title-show': showTitle
        }">
            <h3>Board Directors</h3>
            <div class="border"></div>
        </div>
        <div class="team-board-directors">
            <app-teamate 
                v-for="(director, index) in boardDirectors"
                :key="index"
                :teamate="director"
                :delay="index * commonDelay"
            />
        </div>
        <div :class="{
            'title': true,
            'title-show': showTitle
        }">
            <h3>Directors</h3>
            <div class="border"></div>
        </div>
        <div class="team-directors">
            <app-teamate 
                v-for="(director, index) in directors.slice(0, 4)"
                :key="index"
                :teamate="director"
                :delay="index * commonDelay"
            />
        </div>
        <div class="team-directors team-bottom">
            <app-teamate 
                v-for="(director, index) in directors.slice(4, 8)"
                :key="index"
                :teamate="director"
                :delay="index * commonDelay"
            />
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { Teamate } from "./components"

export default {
    name: "Team",
    components: {
        'app-teamate': Teamate
    },
    data() {
        return {
            commonDelay: 100,
            showTitle: false,
            showTeam: true
        }
    },
    watch: {
        startChangeRoute() {
            setTimeout(() => { this.showContentQ = false }, 100);
            setTimeout(() => { this.showContentP = false }, 200)
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
        setTimeout(() => { this.showTitle = true }, 100)
    }
}
</script>
<style lang="scss" scoped>
.team {
    padding-bottom: 100px;
    opacity: 0;
    transition: all .8s;

    &-directors {
        display: flex;
        justify-content: space-between;
    }

    &-board-directors {
        display: flex;
        justify-content: space-between;
    }

    .team-bottom {
        margin-top: 82px;
    }

    .title {
        margin-top: 102px;
        
        h3 {
            font-weight: 500;
            font-size: 18px;
            line-height: 18px;
            margin: 0px;
            opacity: 0;
            transition: all .8s;
        }

        .border {
            height: 1px;
            width: 0px;
            background-color: #89878791;
            margin-top: 12px;
            margin-bottom: 46px;
            transition: all .8s;
        }
    }

    .title-show {
        h3 {
            opacity: 1;
        }

        .border {
            width: 165px;
        }
    }

    .title-top {
        margin-top: 88px;
    }
}

.team-show {
    opacity: 1;
}
</style>