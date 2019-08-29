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
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label=" " :label-width="formLabelWidth">
          <div class="block">
            <el-date-picker v-model="value1" type="date" placeholder="选择日期" class="date"></el-date-picker>
            <el-button type="primary">昨天</el-button>
          </div>
        </el-form-item>
        <el-form-item label="技能" prop="skil">
          <el-input v-model="ruleForm.skil"></el-input>
        </el-form-item>
        <el-form-item label="理论" prop="theory">
          <el-input v-model="ruleForm.theory"></el-input>
        </el-form-item>
        <el-form-item label="分析" prop="textarea">
          <el-input v-model="ruleForm.textarea"></el-input>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="周考"></el-radio>
            <el-radio label="日考"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormExam = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
    <!-- //添加分析和解决方案 -->
    <!-- <el-dialog title="添加分析---xx同学" :visible.sync="dialogFormVisible">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
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
    </el-dialog>-->
    <p class="cjakan">查看和编辑该生所有成绩</p>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import moment from "moment";
moment.locale("zh-cn");
export default {
  props: {
    data: Object
  },
  components: {},
  data() {
    return {
      dialogFormVisible: false,
      dialogFormExam: false,
      ruleForm: {
        skil: "",
        theory: "",
        textarea: "",
        resource: '',
      },
      //添加班级正则规则
      rules: {
        skil: [
          { required: true, message: "请输入班级名", trigger: "blur" },
          { min: 2, max: 3, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        theory: [
          { required: true, message: "请输入辅导员", trigger: "blur" },
          { min: 2, max: 3, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        textarea: [{ required: true, message: "请输入分析", trigger: "blur" }],
         resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
      },
      formLabelWidth: "120px",

      value1: ""
    };
  },
  computed: {
      ...mapState({
      addCode: state => state.emphasis.addCode,
    })
  },
  methods: {
    ...mapActions({
      getaddrecord: "emphasis/getaddrecord"
    }),
    //确定
    submitForm(formName) {
      console.log(this.ruleForm.resource,'ruleForm.resource');
      this.getaddrecord({
        record_date: moment(this.value1 * 1).format("YYYY-MM-DD"),
        stuid: this.data.stuid,
        skill_score: this.ruleForm.skil,
        theory_score: this.ruleForm.theory,
        analysis: this.ruleForm.textarea,
        week_record: this.ruleForm.resource==='周考'?'1':'0'
      });
console.log(this.addCode.code,'this.addCode.code')
      if(this.addCode.code===0){
         alert(this.addCode.msg)
      }else if(this.addCode.code===1){
         alert(this.addCode.msg)
      }

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
        margin-top: 0 !important;
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