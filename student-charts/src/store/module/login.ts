

import {login} from "../../service/index"
//模块所有状态
const state={
    tel:'',
    password:'' 
}
//莫快男同步改变
const mutations={
 
}

//模块异步不改变
const actions = {
    async getLogin({commit}:any, payload:any){
        console.log(payload)
        let data = await login(payload);
        console.log(data)
        // commit('updateSignDet',data.data);
    },
  } 

export default{
   namespaced: true,
   state,
   mutations,
   actions
}
