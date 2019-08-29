

import {login,register,checkuser} from "../../service/index"
//模块所有状态
const state={
    code:'',
    //检查用户信息的id和时间
    tid:'',  //tid
    create_time:'',  //时间
    role:''  //角色
}
//莫快男同步改变
const mutations={
    updatetLogin(state:any, payload:any){
        state.code=payload;
    },

    //检查用户信息
    updatecheckuser(state:any, payload:any){
        state.tid=payload.tid;
        state.create_time=payload.create_time;
        state.role=payload.role;
         console.log(payload,'payload')
    }
}

//模块异步不改变
const actions = {
    //登陆
    async getLogin({commit}:any, payload:any){
        let data:any = await login(payload);
        commit('updatetLogin',data.code);
    },

    //注册
    async getregister({commit}:any, payload:any){
        let data:any = await register(payload);
    },

    //检查用户信息
    async getcheckuser({commit}:any, payload:any){
        let data:any = await checkuser(payload);
        commit('updatecheckuser',data.useinfo);
    },
  } 

export default{
   namespaced: true,
   state,
   mutations,
   actions
}
