<template>
    <div>
        <div class="aboutContainer">
            <TextContent class="aboutContainer__text" :contents="contents"/>
            <ImageSlider />
        </div>
    </div>
</template>

<script>
import ImageSlider from '../atom/ImageSlider'
import TextContent from '../atom/textContent'

export default {
    data(){
        return {
            contents: {
                title: "ABOUT",
                text: `チーズアカデミーは、チーズ職人養成学校です。
                        チーズの素晴らしさを、自給自足を通じて、できるだけ多くの人に知っていただきたい。
                        そして、食卓にはいつもチーズがあった、あの頃の当たり前をこの手で取り戻したい。

                        そんな思いから、チーズ職人養成学校「チーズアカデミーTOKYO」は歩みを始めています。

                        卒業後、チーズ自給自足のバックアップはもちろんのこと、
                        チーズ職人への就職・転職もサポートします。`,
                isColor: true
            }
        }
    },
    components: {
        ImageSlider
        ,TextContent
    }
}
</script>

<style lang="scss" scoped>
.aboutContainer {

    &__text{
        margin: 60px auto;
    }
}

</style>