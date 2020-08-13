import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store ({
    state: {
        courses: [
            {
                title: "本格的な農園を使った実地研修",
                description: "チーズアカデミーでは、本格的な農園を使った実地研修を \
                使用するような、広大で環境も整った農園を余すところ \
                なく使い、卒業時には本格的なチーズを自分の力で作れる \
                実践力の養成を目指します。",
                image_url: require("../assets/course_01.jpg")
            },
            {
                title: "必要な知識もしっかりと取得",
                description: "チーズ作りには、しっかりとした食に関する知識が \
                欠かせません。チーズアカデミーでは、一流講師陣による、\
                チーズ作りに必要ないろはを余すところなく学べます。\
                チーズそのものでなく、栄養学全般を学ぶことも \
                可能ですので、チーズ以外への展開も夢ではないでしょう。",
                image_url: require("../assets/course_02.jpg")
            },
            {
                title: "卒業制作はティスティング審査あり",
                description: "チーズアカデミーでは最後の2ヶ月間で卒業制作を実施。 \
                卒業制作として、チーズ作りを実際に行います。卒業後、\
                一般参加によるティスティング審査があるため、作り手の \
                目線だけでなく、消費者の目線から、卒業制作作品としての \
                チーズを、しっかりと評価いただくことができます。",
                image_url: require("../assets/course_03.jpg")
            }
        ],
        news: [
            {
                date: "2016/11/18",
                description: "チーズアカデミー卒業生のコスゲさんによる\
                チーズだけをふんだんに使用した話題のピザ屋\
                「Kosuge Pizza」が渋谷でオープンしました！",
                image_url: require("../assets/news_img.jpg")
            },
            {
                date: "2016/11/18",
                description: "チーズアカデミー卒業生のコスゲさんによる\
                チーズだけをふんだんに使用した話題のピザ屋\
                「Kosuge Pizza」が渋谷でオープンしました！",
                image_url: require("../assets/news_img.jpg")
            },
            {
                date: "2016/11/18",
                description: "チーズアカデミー卒業生のコスゲさんによる\
                チーズだけをふんだんに使用した話題のピザ屋\
                「Kosuge Pizza」が渋谷でオープンしました！",
                image_url: require("../assets/news_img.jpg")
            },
        ],
        access: [
            {
                header: "学校名",
                body: "チーズアカデミーTOKYO"
            },
            {
                header: "事務所所在地",
                body: "〒107-0061東京都港区北青山3-5-6 青朋ビル2F"
            },
            {
                header: "TEL",
                body: "03-5413-5045"
            },
            {
                header: "FAX",
                body: "03-5413-5046"
            },
            {
                header: "MAIL",
                body: "dummy@cheeseacademy.tokyo"
            },
        ],
        contact: {
            name: "",
            kana: "",
            mail: "",
            notificate: "",
            motivate: "",
            detail: ""
        },
        modal: {
            isOpen: false
        }
    },
    mutations: {
        // validationは一旦無視
        setContactName(state, name){
            state.contact.name = name
        },
        setContactKana(state, kana){
            state.contact.kana = kana
        },
        setContactMail(state, mail){
            state.contact.mail = mail
        },
        setContactNotificate(state, notificate){
            state.contact.notificate = notificate
        },
        setContactMotivate(state, motivate){
            state.contact.motivate = motivate
        },
        setContactDetail(state, detail){
            state.contact.detail = detail
        },
        changeModalStatus(state, boolen){
            state.modal.isOpen = boolen
        }
    }
})

export default store;