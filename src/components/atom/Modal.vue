<template>
    <div>
        <transition name="modal" appear>
            <div class="modalOverlay" @click.self="closeModal">
                <div class="modalWindow">
                    <button class="closeButton" @click="closeModal">×</button>
                    <div class="modalContent">
                        <!-- <slot></slot> -->
                        <div class="testContent">
                            <h2>ピングーとは</h2>
                            <img src="http://www.pingu.jp/assets/img/about/cha_pingu.png" />
                            <p>ピングーは、南極に住む小さなペンギンの男の子。パパとママと妹のピンガ、それに仲良しのロビと一緒に楽しく暮らしているよ。やんちゃで元気なピングーは、いろんなことに興味シンシン！失敗もするし、イタズラを怒られたりするけど、みんなにとっても愛されているんだよ。 いろんなピングーの表情を見ていると、気分もほのぼのだね。</p>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    methods:{
        ...mapMutations(["changeModalStatus"]),
        closeModal(){
            return this.changeModalStatus(false)
        }
    }
}
</script>

<style lang="scss" scoped>
button:focus {
    outline:0;
}

.modalOverlay{
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 99999999;
    top: 0;
    left: 0;
    width:100vw;
    height:100vh;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
}

.modalWindow{
    position: relative;
    background: #fff;
    border-radius: 0.2rem;
    box-shadow: 0 0 3rem rgba(0, 0, 0, .6);
    vertical-align: middle;
    width: 80%;
    max-width: 600px;
    height:80%;
}

.modalContent{
  height: 100%;
  overflow:hidden;
  overflow-y: scroll;
}


.closeButton {
	position: absolute;
  top: -1.2rem;
  right: -1rem;
  border-radius:50%;
  width:2.5rem;
  height:2.5rem;
  background-color:black;
  color:white;
  font-size: 1.2rem;
  z-index:99;
}


.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;

  .modalWindow {
    transition: opacity 0.4s, transform 0.4s;
  }
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .modalWindow {
    opacity: 0;
    transform: translateY(-20px);
  }
}

.testContent {
    padding: 30px;

    & img {
        width: 500px;
    }

    & h2 {
        font-size: 32px;
        font-weight: bold;
    }

    & p {
        line-height: 30px;
    }
}
</style>



