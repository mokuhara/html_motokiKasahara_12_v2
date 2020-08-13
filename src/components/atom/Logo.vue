<template>
    <div>
        <div class="imageWrapper">
            <a href="#">
                <img src="../../assets/header_logo.png">
            </a>
        </div>
    </div>
</template>

<script>
import 'normalize.css'

export default {

}
</script>

<style lang="scss" scoped>
.imageWrapper {
    height:100%;
    display: flex;
    align-items: center;

    & img {
        width: 200px;
    }

}
</style>