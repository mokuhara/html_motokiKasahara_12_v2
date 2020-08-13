<template>
    <div>
        <div class="headerContainer">
            <header class="headerWrapper">
                <Logo class="headerWrapper__logo"/>
                <Menu class="headerWrapper__menu"/>
            </header>
            <div class="dummy"></div>
        </div>
    </div>
</template>

<script>
import Menu from '../atom/Menu'
import Logo from '../atom/Logo'

export default {
    components: {
        Menu,
        Logo
    }
}
</script>

<style lang="scss" scoped>

.dummy {
    width: 100%;
    height: 116px;
}
.headerWrapper {
    display:flex;
    justify-content: space-between;
    position: fixed;
    width:95%;
    background-color: #fff;
    opacity: 0.9;
    z-index:99999999;f

    &__logo {
        display: flex;
        align-items: center;
    }
}
</style>