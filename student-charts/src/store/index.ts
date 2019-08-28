import Vue from "vue"
import Vuex from  "vuex"
//引入store子模块
import login from "./module/login";
Vue.use(Vuex)

export default  new Vuex.Store({
    modules:{
        login
    },
    plugins:[]
})