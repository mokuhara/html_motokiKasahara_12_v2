<template>
    <div>
        <ul class="menuList">
            <li class="menuList__listItem"
                v-for="(menuList, index) in menuLists"
                :key="index"
            >
                <a :href="createHref(menuList)" v-smooth-scroll>{{ menuList }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import 'normalize.css'

export default {
    data(){
        return {
            menuLists: ["ABOUT", "COURSE", "NEWS", "ACCESS", "CONTACT"]
        }
    },
    methods:{
        createHref(str){
            return `#${str}`
        }
    }
}
</script>

<style lang="scss" scoped>
.menuList {
    display:flex;
    list-style: none;
    margin: 0;

    &__listItem a {
        display: inline-block;
        padding: 50px 25px;
        text-decoration: none;
        color : inherit;
        font-size:14px;
    }

    &__listItem:hover {
        background-color:rgba(0, 0, 0, 0.1);
        transition: 0.1s;
    }
}
</style>