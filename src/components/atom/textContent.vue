<template>
    <div>
        <div class="textContainer">
            <h2 :id="contents.title" :class="{ yellow : contents.isColor}">{{ contents.title }}</h2>
            <p>{{ trimText(contents.text) }}</p>
        </div>
    </div>
</template>

<script>
import 'normalize.css'

export default {
    props: {
        contents: Object
    },
    methods: {
        trimText(str){
            return str.replace(/ /g, '');
        }
    }
}
</script>

<style lang="scss" scoped>
.textContainer {
    text-align: center;
    color: #222222;

    & h2 {
        font-size:24px;
        font-weight: bold;
    }

    & p {
        font-size:16px;
        white-space: pre;
        line-height: 30px;
    }
}

.yellow {
    color: #ffd61a;
}
</style>