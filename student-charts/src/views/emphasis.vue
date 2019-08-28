<template>
    <div class="emphasis">
       <Header>
        <template slot="heade">重点关注学生考试成绩统计图</template>
        </Header>
        <div class="cen">
           <div class="top">
               <ul>
                   <li>切换班级：</li>
                   <li>
                       <span>1703C</span><span>1703C</span><span>1703C</span>

                       <i class="addClass">创建班级 + </i>
                   </li> 
               </ul>
           </div>   
           <div class="addStude">
               <p>
                   <span>添加学生 + : </span>
                   <input type="text" placeholder="输入姓名">
                   <input type="text" placeholder="末位次数">
                   <input type="text" placeholder="结对子,帮扶对象">
                   <button>添加</button>
               </p>
             
           </div>
           <div class="brokenEacher">
                 <Eacher></Eacher>
                <AddCj></AddCj>
           </div>

           <!-- <div class="listEacher">
               <ListEacher></ListEacher>
                 <AddCj></AddCj>
           </div> -->
           
        </div>
    </div>
</template>
<script>
import "../sass/emphasis.scss";
import Header from '../components/heade';
import Eacher from '../components/eacher';
import AddCj from "../components/addCj";
import ListEacher from "../components/listEacher"
export default {
    props:{

    },
    components:{
Header,
Eacher,
AddCj,
ListEacher
    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>