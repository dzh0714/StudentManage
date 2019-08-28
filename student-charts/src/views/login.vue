<template>
  <div class="main">
    <Header>
      <template slot="heade">重点学生日周考成绩录入管理系统</template>
    </Header>
    <div class="footer">
      <h2>网站工程</h2>
      <ul class="tab">
          <li v-for="(item,index) in list" :key="index+1"  @click="login(index)"  :class="index===ind?'active':''">{{item}}</li>
      </ul>
      <div class="cen">
        <input type="text" placeholder="电话"  v-model="tel" />
        <input type="text" placeholder="输入密码" v-model="password" />
        <p><input type="checkbox" class="check"/> 两周日自动登入</p>  
        <button @click='btn'>{{ind===0?'登陆':'注册'}}</button>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import Vue from "vue"
import "../sass/login.scss";
import Header from "../components/heade.vue";

import { mapState, mapActions } from "vuex";
export default Vue.extend({
  props: {},
  components: {
    Header
  },
  data() {
    return {
        ind:0,
        list:['登录','注册'],
        tel:'',
        password:''
    };
  },
  computed: {
  },
  methods: {
        ...mapActions({
              getLogin: "login/getLogin",
            }),
      login(index:any){
          this.ind=index;
      },
      btn(){
        // console.log(this.tel,this.password)
          // this.$router.push({name:'AllGrades'})
          // this.$router.push({name:'Emphasis'})
          this.getLogin({
              username:this.tel,
              password:this.password
          })
          
      }
  },
  created() {},
  mounted() {}
});
</script>
<style scoped lang="">
</style>