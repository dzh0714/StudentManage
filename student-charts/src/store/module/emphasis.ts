

import {create,lists,addStudent,studentlists,recordlists,addrecord} from "../../service/index"
//模块所有状态
const state={
    list:[], //获取班级列表
    studentListL:[], //重点名单列表
    CjLists:[],  //成绩列表,
    addCode:'',//添加成绩的状态
}
//莫快男同步改变
const mutations={
    //获取班级列表
    updatetLists(state:any, payload:any){
        state.list=payload;
    },
    //重点名单列表
    updatetecordlists(state:any, payload:any){
       state.studentListL=payload;
    },
    //成绩列表
    updateteCjLists(state:any, payload:any){
        state.CjLists=payload;
     },
    //添加成绩
    updateaddrecord(state:any, payload:any){
       state.addCode=payload;
    }
}

//模块异步不改变
const actions = {
    //创建班级
    async getcreate({commit}:any, payload:any){
        let data:any = await create(payload);
    },

    //获取班级列表
    async getLists({commit}:any, payload:any){
        let data:any = await lists(payload);
        commit('updatetLists',data.lists);
    },

    //添加重点学生名单
    async getaddStudent({commit}:any, payload:any){
        let data:any = await addStudent(payload);
    },

    //重点名单列表
    async gerecordlists({commit}:any, payload:any){
        let data:any = await studentlists(payload);
        commit('updatetecordlists',data.lists);
    },

    //添加成绩
    async getaddrecord({commit}:any, payload:any){
        console.log(payload,'payloadpayloadpayload')
        let data:any = await addrecord(payload);
        commit('updateaddrecord',data);
    },

    // //成绩列表
    // async getCjLists({commit}:any, payload:any){
    //     let data:any = await studentlists(payload);
    //     commit('updateteCjLists',data.lists);
    // },
    
    
  } 

export default{
   namespaced: true,
   state,
   mutations,
   actions
}
