<template>
    <div class="container">
        <Header />
        <div class="mainContainer">
            <Main />
        </div>
        <Footer />

        <div v-if="modal.isOpen">
            <Modal />
        </div>
    </div>
</template>

<script>
import Header from '../components/organisms/Header'
import Main from '../components/templates/Main'
import Footer from '../components/organisms/Footer'
import Modal from '../components/atom/Modal'

import { mapState } from "vuex";

export default {
    computed: {
        ...mapState(["modal"])
    },
    components: {
        Header,
        Main,
        Footer,
        Modal
    }
}
</script>

<style lang="scss" scoped>
.mainContainer{
    width: 1200px;
    margin: 0 auto;
}
</style>