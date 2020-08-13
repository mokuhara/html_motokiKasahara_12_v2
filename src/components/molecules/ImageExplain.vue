<template>
    <div class="courseContainer">
        <div class="courseItems">
            <div  class="courseItem" v-for="(course, index) in courses" :key="index">
                <div class="courseItem__image">
                    <img :src="course.image_url" />
                </div>
                <div class="courseItem__text">
                    <h2>{{ course.title }}</h2>
                    <p>{{ course.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'normalize.css'

import { mapState } from "vuex";

export default {
    computed: {
        ...mapState(["courses"])
    }
}
</script>

<style lang="scss" scoped>
.courseItem {
    display: flex;

    &:nth-child(even){
        flex-direction: row-reverse;
    }

    &__image {
        width:50%;
    }

    &__image img{
        width: 100%;
    }

    &__text {
        width: 480px;
        margin-left: 50px;
        margin: auto 50px;
        text-align: left;
        flex:1;
    }

    &__text h2 {
        font-size:24px;
        font-weight: bold;
        margin-bottom: 40px;
    }

    &__text p {
        line-height:30px;
    }
}
</style>