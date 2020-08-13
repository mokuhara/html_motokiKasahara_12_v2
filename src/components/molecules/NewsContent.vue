<template>
    <div class="newsContainer">
        <div class="newsItems">
            <div  class="newsItem" v-for="(newsItem, index) in news" :key="index">
                <div class="newsItem__image">
                    <img :src="newsItem.image_url" />
                </div>
                <div class="newsItem__text">
                    <p class="newsItem__datetime">{{ newsItem.date }}</p>
                    <p class="newsItem__description">{{ newsItem.description }}</p>
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
        ...mapState(["news"])
    }
}
</script>

<style lang="scss" scoped>
.newsItems {
    display:flex;
    justify-content: center;
}

.newsItem {
    width:300px;
    margin:0 30px;

    &:hover {
        outline: 5px solid rgba(64,158,144,0.5);
        outline-offset: 0px;
        transition: 0.1s;
    }

    &__image {
        overflow: hidden;
    }

    &__image img:hover{
        transform:scale(1.2,1.2);
        transition: 0.3s;
    }

    &__text {
        font-size:14px;
    }

    &__datetime {
        margin-top: 30px;
        margin-bottom: 24px;
        text-align: left;
    }

    &__description {
        text-align: center;
        line-height:30px;
    }
}
</style>