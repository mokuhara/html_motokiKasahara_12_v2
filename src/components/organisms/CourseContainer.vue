<template>
    <div class="courseContainer">
        <TextContent class="courseContainer__text" :contents="contents"/>
        <ImageExplain />
    </div>
</template>

<script>
import TextContent from '../atom/textContent'
import ImageExplain from '../molecules/ImageExplain'


export default {
    data(){
        return {
            contents: {
                title: "COURSE",
                text: `未経験からでもスタートができるよう、カリキュラムは多くの専門家や
                        現役チーズ職人のアドバイスのもと、作られました。`,
                isColor: false
            }
        }
    },
    components: {
        ImageExplain,
        TextContent
    }
}
</script>

<style lang="scss" scoped>
.courseContainer {
       &__text{
        margin: 60px auto;
    }
}
</style>