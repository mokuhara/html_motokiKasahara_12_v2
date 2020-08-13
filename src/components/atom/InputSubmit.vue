<template>
    <div>
        <div class="inputWrapper">
            <div class="submitButton" @click="submitData">
                <div class="submitButton__text">送信</div>
            </div>
        </div>
    </div>
</template>

<script>
import 'normalize.css'

import { mapState } from 'vuex'

export default {
    data(){
        return {
            inputContent: ""
        }
    },
    computed: {
        ...mapState(["contact"])
    },
    methods: {
        submitData(){
            const contact = this.contact
            alert(
                `送ったデータは以下です
                名前： ${contact.name}
                カナ： ${contact.kana}
                メール： ${contact.mail}
                きっかけ： ${contact.notificate}
                動機： ${contact.motivate}
                詳細： ${contact.detail}`
            )
        }
    }
}
</script>

<style lang="scss" scoped>
.submitButton {
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

    &:hover{
        background: rgba(255, 214, 26, 0.6);
    }

    &:active{
        transform: translateY(4px);
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
        border-bottom: none;
    }

    &__text {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        font-weight: bold;
    }
}
</style>