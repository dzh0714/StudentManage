<template>
  <div class="addcj">
    <ul>
      <li>
        <el-button type="text" @click="dialogFormExam = true">添加考试 +</el-button>
      </li>
      <li>
        <el-button type="text" @click="dialogFormVisible = true">添加分析和解决方案 +</el-button>
      </li>
    </ul>
    <!-- 添加考试 -->
    <el-dialog title="新添成绩--xx学生" :visible.sync="dialogFormExam">
      <el-form :model="form">
        <el-form-item label=" " :label-width="formLabelWidth">
          <div class="block">
            <el-date-picker v-model="value1" type="date" placeholder="选择日期" class="date"></el-date-picker>
            <el-button type="primary">昨天</el-button>
          </div>
        </el-form-item>
        <el-form-item label="理论" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" placeholder="0-100之间的数字"></el-input>
        </el-form-item>
        <el-form-item label="技能" :label-width="formLabelWidth">
          <el-input v-model="form.region" autocomplete="off" placeholder="0-100之间的数字"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormExam = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormExam = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- //添加分析和解决方案 -->
    <el-dialog title="添加分析---xx同学" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label=" " :label-width="formLabelWidth">
          <div class="block">
            <el-date-picker v-model="value1" type="date" placeholder="选择日期" class="date"></el-date-picker>
            <el-button type="primary">昨天</el-button>
          </div>
        </el-form-item>
        <el-form-item label="分析" :label-width="formLabelWidth">
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
        </el-form-item>
        <el-form-item label="解决方案" :label-width="formLabelWidth">
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <p class="cjakan">查看和编辑该生所有成绩</p>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      dialogFormVisible: false,
      dialogFormExam: false,
      form: {
        name: "",
        region: "",
        type: []
      },
      formLabelWidth: "120px",
      checked: true,
      Zchecked: true,
      textarea: "",
      value1: ""
    };
  },
  computed: {},
  methods: {
    addexam() {
      this.$prompt("请输入邮箱", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: "邮箱格式不正确"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的邮箱是: " + value
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@media screen and (max-width: 2560px) and (min-width: 768px) {
  .addcj {
    width: 100%;
    height: 70px;
    background: #f2f1f1;
    display: flex;
    justify-content: space-between;
    ul {
      display: flex;
      list-style: none;
      li {
        padding: 0 10px;
        background: #fff;
        margin-left: 5px;
      }
    }
    .cjakan {
      padding: 10px;
      background: #fff;
      margin-left: -10px;
    }
  }
  .block {
    width: 353px;
    height: 40px;
    display: flex;
    .date {
      width: 353px;
      height: 40px;
      input {
        width: 100%;
        height: 100%;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .addcj {
    width: 100%;
    height: 100%;
    background: #f2f1f1;
    ul {
      list-style: none;
      li {
        padding-left: 10px;
        line-height: 30px;
        background: #fff;
        margin-top: 5px;
      }
    }
    .cjakan {
      padding: 10px;
      line-height: 30px;
      background: #fff;
      // margin-left: -10px;
    }
  }

   .block {
    width: 100%;
    height: 40px;
    display: flex;
    // .date {
    //   width: 353px;
    //   height: 40px;
    //   input {
    //     width: 100%;
    //     height: 100%;
    //   }
    // }
  }
}
</style>