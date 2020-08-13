<template>
    <div>
        <div class="mVContainer">
            <div class="mVContainer__embMovie">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YHe08JSn1TI?autoplay=1&mute=1&loop=1&playlist=YHe08JSn1TI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="mVContainer__back"></div>
            <div class="mVContainer__textWrapper">
                <h1 class="mVContainer__title">{{ title }}</h1>
                <p class="mVContainer__description">{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import 'normalize.css'

export default {
    data(){
        return {
            title: "セカイを変えるチーズを作ろう",
            description: "チーズ職人養成学校「チーズアカデミーTOKYO」"
        }
    }
}
</script>

<style lang="scss" scoped>
.mVContainer {
    height: 600px;
    position:relative;
    overflow: hidden;
    color:#fff;

    &__embMovie {
        height: 0;
        overflow: hidden;
        max-width: 100%;
        padding-bottom: 56.25%; /* 16:9 の高さなので 56.25% (= 9 ÷ 16) */
        position: relative;
    }

    &__embMovie iframe {
        left: 0;
        position: absolute;
        top: -20px;
        width: 100%;
        height:700px;
    }

    &__back {
        position: absolute;
        top:0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color:rgba(0, 0, 0, 0.6);
    }

    &__textWrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &__title {
        font-size:42px;
        font-weight: bold;
    }

    &__description {
        font-size:24px;
    }
}

</style>