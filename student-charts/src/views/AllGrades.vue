<template>
  <div class="All_Grades">
    <Header>
      <template slot="heade">XX学生日周考试成绩统计表</template>
    </Header>
    <div class="centen">
      <div class="top">
        <ul>
          <li>讲师：xxx</li>
          <li>学生：xxx</li>
        </ul>
        <p>
          <input type="text" placeholder="快捷选择其他学生" />
        </p>
      </div>
      <div class="list">
        <p>
          <span>序号</span>
          <span>日期</span>
          <span>理论</span>
          <span>技能</span>
          <span>分析和解决</span>
          <span>是否周考</span>
          <span>操作</span>
        </p>
        <List></List>
      </div>
    </div>
  </div>
</template>
<script>
import "../sass/AllGrade.scss";
import Header from "../components/heade";
import List from "../components/list"
export default {
  props: {},
  components: {
    Header,
    List
  },
  data() {
    return {
      // list:['序号','日期',]
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>