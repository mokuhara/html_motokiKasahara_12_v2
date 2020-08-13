<template>
    <carousel
        :per-page="3"
        :navigation-enabled="true"
    >
        <slide class="slide-item" v-for="(image_url, index) in image_urls" :key="index">
            <img :src="image_url" alt="">
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    data(){
        return {
            image_urls: [
                require("../../assets/about_01.jpg"),
                require("../../assets/about_02.jpg"),
                require("../../assets/about_03.jpg"),
                require("../../assets/about_04.jpg"),
                require("../../assets/about_01.jpg"),
                require("../../assets/about_02.jpg"),
            ],
            hooperSettings: {
                itemsToShow: 2,
                centerMode: true,
            }
        }
    },
    components: {
        Carousel,
        Slide
    }
}

</script>

<style lang="scss" scoped>

.slide-item {
  display: flex;
  padding: 3px;
  margin:  0 auto; 
  justify-content: center; 
  align-items: center;
}

</style>

