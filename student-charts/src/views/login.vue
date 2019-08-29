<template>
  <div class="main">
    <Header>
      <template slot="heade">重点学生日周考成绩录入管理系统</template>
    </Header>
    <div class="footer">
      <h2>网站工程</h2>
      <ul class="tab">
        <li
          v-for="(item,index) in list"
          :key="index+1"
          @click="login(index)"
          :class="index===ind?'active':''"
        >{{item}}</li>
      </ul>
      <div class="cen">
        <input type="text" placeholder="电话" v-model="tel" />
        <input type="text" placeholder="输入密码" v-model="password" @keyup.native="UpNumber" />
        <p class="pCheck">
          <input type="checkbox" class="check" v-model="flag" /> 两周日自动登入
        </p>
        <button @click="btn(ind)" class="btn">{{ind===0?'登陆':'注册'}}</button>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import Vue from "vue";
import "../sass/login.scss";
import Header from "../components/heade.vue";
import { setCookie, getCookie } from "../utils/index";
import { mapState, mapActions } from "vuex";
export default Vue.extend({
  props: {},
  components: {
    Header
  },
  data() {
    return {
      ind: 0,
      list: ["登录", "注册"],
      tel: "",
      password: "",
      time: "336",
      flag: false
    };
  },
  computed: {
    ...mapState({
      code: (state: any) => state.login.code
    })
  },
  methods: {
    ...mapActions({
      getLogin: "login/getLogin",
      getregister: "login/getregister",
      getcheckuser: "login/getcheckuser"
    }),
    login(index: any) {
      this.ind = index;
    },
    btn(ind: any) {
      if (ind === 0) {
        if ( /^1[3456789]\d{9}$/.test(this.password) ||/^[a-zA-Z][A-Za-z0-9_]{5,19}$/.test(this.tel)) {
          if (this.flag === true) {
            setCookie(this.time);
          }
          //登陆
          this.getLogin({
            username: this.tel,
            password: this.password,
            validlength: this.time
          });
          //判断登录成功跳转路由检测用户信息
          if (this.code === 1) {
            this.getcheckuser();
            // this.$router.push({ name: "AllGrades" });
            // this.$router.push({ name: "Emphasis" });
          } else {
            alert("账号或者密码错误");
          }
        } else {
          alert("请书写正确的格式");
        }
      } else if (ind === 1) {
        //注册
        this.getregister({
          username: this.tel,
          password: this.password,
          alidlength: 13355557777
        });
      }
    }
  },
  created() {
    if (getCookie) {
      this.$router.push({ name: "Emphasis" });
    }
  },
  mounted() {}
});
</script>
<style scoped lang="">
</style>