<template>
    <div class="contactContainer">
        <TextContent :contents="contents"/>
        <div class="contactForm">
            <ContactForm />
        </div>
    </div>
</template>

<script>
import TextContent from '../atom/textContent'
import ContactForm from '../molecules/ContactForm'


export default {
    data(){
        return {
            contents: {
                title: "CONTACT",
                text: `説明会お申し込み・お問い合わせ


                        ぜひ1度、足を運んでみませんか。説明会は随時開催中。
                        その他、お問い合わせもお気軽にどうぞ。お待ちしております。

                        ※チーズアカデミーは実際には存在しません。
                        間違っても問い合わせしないようお願いいたします。`
            }
        }
    },
    components: {
        ContactForm,
        TextContent
    }
}
</script>

<style lang="scss" scoped>
.contactContainer {
    margin: 0 auto;
}
.contactForm {
    margin: 30px 17%;
}
</style>