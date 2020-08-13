<template>
    <div>
        <div class="inputWrapper" :class="{isBorderTop: inputAttr.isBorderTop}">
            <div class="inputWrapper__label">
                <p>{{ inputAttr.label }}</p>
            </div>
            <div class="inputWrapper__inputElement" >
                <p v-for="(checkbox,index) in inputAttr.checkboxes" :key="index">
                    <input
                        :id="checkbox.name"
                        :type="inputAttr.type"
                        :value="checkbox.value"
                        v-model="inputContent"
                        @change="setValue(inputAttr.name)"
                    >
                    <label :for="checkbox.name">{{ checkbox.value }}</label>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import 'normalize.css'

import { mapMutations } from 'vuex'

export default {
    props: {
        inputAttr: Object
    },
    data(){
        return {
            inputContent: []
        }
    },
    methods: {
        ...mapMutations([
            'setContactName',
            'setContactKana',
            'setContactMail',
            'setContactMotivate',
            'setContactDetail'
        ]),
        setValue(name){
            switch (name) {
                case 'name':
                    this.setContactName(this.inputContent)
                break;
                case 'kana':
                    this.setContactKana(this.inputContent)
                break;
                case 'mail':
                    this.setContactMail(this.inputContent)
                break;
                case 'motivate':
                    this.setContactMotivate(this.inputContent)
                break;
                case 'detail':
                    this.setContactDetail(this.inputContent)
                break;
            }
            return
        }
    }
}
</script>

<style lang="scss" scoped>
.inputWrapper {
    display: flex;
    text-align: left;
    border-top: solid 1px #bfbfbf;

    &:hover {
        background-color:rgba(0, 0, 0, 0.1);
        transition: 0.1s;
    }

    &__label {
         width: 50%;
         display:flex;
         align-items: center;
         padding: 10px 0;
    }

    &__inputElement {
        width: 50%;
        border-left: solid 1px #bfbfbf;
        padding: 10px 0 10px 10px;
    }

    &__inputElement label{
        padding-left: 5px;
    }
}

.isBorderTop {
    border-top: solid 1px #bfbfbf;
}

</style>