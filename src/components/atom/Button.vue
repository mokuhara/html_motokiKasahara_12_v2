<template>
    <div>
        <div class="buttonWrapper">
            <div @click="openModal" class="botton">
                <div class="buttonText">{{ buttonText }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import 'normalize.css'

import { mapMutations } from 'vuex'

export default {
    props: {
        buttonText: String
    },
    methods: {
        ...mapMutations(["changeModalStatus"]),
        openModal(){
            return this.changeModalStatus(true)
        }
    }
}
</script>

<style lang="scss" scoped>

.botton {
    margin: 60px auto;
    width: 300px;
    height: 60px;
    font-size:18px;
    display: inline-block;
    text-decoration: none;
    background: #ffd61a;
    color: #FFF;
    border-bottom: solid 4px #a08409;
    border-radius: 3px;
}

.botton:hover{
    background: rgba(255, 214, 26, 0.6);
}

.botton:active {
    transform: translateY(4px);
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
    border-bottom: none;
    }

.buttonText {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
}
</style>