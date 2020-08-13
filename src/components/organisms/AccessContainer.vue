<template>
    <div class="accessContainer">
        <TextContent :contents="contents"/>
        <GMap />
        <Table :tableItems="access" />
    </div>
</template>

<script>
import { mapState } from "vuex";

import TextContent from '../atom/textContent'
import GMap from '../atom/GMap'
import Table from '../atom/Table'

export default {
    computed: {
        ...mapState(["access"])
    },
    data(){
        return {
            contents: {
                title: "ACCESS",
                text: "会社情報",
                isColor: false
            }
        }
    },
    components: {
        TextContent,
        GMap,
        Table
    }
}
</script>

<style lang="scss" scoped>
.accessContainer {
    padding: 60px 0;
    background-color: #F6F7F7;
}
</style>
