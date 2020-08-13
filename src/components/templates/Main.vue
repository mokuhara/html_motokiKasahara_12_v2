<template>
    <div>
        <div class="mainContainer">
            <Mv />
            <AboutContainer />
            <CourseContainer />
            <NewsContainer />
            <AccessContainer />
            <ContactContainer />
        </div>
    </div>
</template>

<script>
import Mv from '../atom/Mv'
import AboutContainer from '../organisms/AboutContainer'
import CourseContainer from '../organisms/CourseContainer'
import NewsContainer from '../organisms/NewsContainer'
import AccessContainer from '../organisms/AccessContainer'
import ContactContainer from '../organisms/ContactContainer'

export default {
    components: {
        Mv,
        AboutContainer,
        CourseContainer,
        NewsContainer,
        AccessContainer,
        ContactContainer
    }
}
</script>

<style lang="scss" scoped>
</style>