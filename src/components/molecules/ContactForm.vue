<template>
    <div class="contactContainer">
       <InputText :inputAttr="inputName" />
       <InputText :inputAttr="inputKana" />
       <InputText :inputAttr="inputMail" />
       <InputSelect :inputAttr="inputSelect" />
       <InputCheckbox :inputAttr="inputCheckbox" />
       <InputTextarea :inputAttr="inputDetail" />
       <InputSubmit />
    </div>
</template>

<script>
import InputText from '../atom/InputText'
import InputSelect from '../atom/InputSelect'
import InputCheckbox from '../atom/InputCheckbox'
import InputTextarea from '../atom/InputTextarea'
import InputSubmit from '../atom/InputSubmit'
import 'normalize.css'

export default {
    data(){
        return {
            inputName: {
                type: "text",
                name: "name",
                label: "名前",
                placeholder: "山田太郎",
                isBorderTop: true
            },
            inputKana: {
                type: "text",
                name: "kana",
                label: "カナ",
                placeholder: "ヤマダタロウ"
            },
            inputMail: {
                type: "mail",
                name: "mail",
                label: "メールアドレス",
                placeholder: "hoge@gmail.com"
            },
            inputSelect: {
                name: "notificate",
                label: "ジーズアカデミーを知ったきっかけ",
                options: [
                    {
                        value: "",
                        label: "選択してください"
                    },
                    {
                        value: "google検索",
                        label: "google検索"
                    },
                    {
                        value: "SNS",
                        label: "SNS"
                    },
                    {
                        value: "紹介",
                        label: "紹介"
                    },
                    {
                        value: "たまたま通りかかった",
                        label: "たまたま通りかかった"
                    },
                    {
                        value: "その他",
                        label: "その他"
                    },
                ]

            },
            inputCheckbox: {
                type: "checkbox",
                name: "motivate",
                label: "志望動機",
                checkboxes: [
                    {
                        name:"check1",
                        value: "起業をしたい"
                    },
                    {
                        name:"check2",
                        value: "チーズ系企業に就職・転職したい"
                    },
                    {
                        name:"check3",
                        value: "チーズと関わる仕事をしており、仕事に生かしたい"
                    },
                    {
                        name:"check4",
                        value: "チーズの教養を身につけたい"
                    },
                ]
            },
            inputDetail: {
                type: "textarea",
                name: "detail",
                label: "詳細",
                placeholder: "詳細を記載",
                isBorderTop: true
            },
        }
    },
    components: {
        InputText,
        InputSelect,
        InputCheckbox,
        InputTextarea,
        InputSubmit
    }
}
</script>

<style lang="scss" scoped>
