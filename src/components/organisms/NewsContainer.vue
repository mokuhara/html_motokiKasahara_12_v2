<template>
    <div class="newsContainer">
        <TextContent class="newsContainer__text" :contents="contents"/>
        <NewsContent />
        <Button :buttonText="buttonText" />
    </div>
</template>

<script>
import TextContent from '../atom/textContent'
import NewsContent from '../molecules/NewsContent'
import Button from '../atom/Button'


export default {
    data(){
        return {
            contents: {
                title: "NEWS",
                text: "ニュース",
                isColor: false
            },
            buttonText: "More"
        }
    },
    components: {
        TextContent,
        NewsContent,
        Button
    }
}
</script>

<style lang="scss" scoped>
.newsContainer {
       &__text{
        margin: 60px auto;
    }
}
</style>