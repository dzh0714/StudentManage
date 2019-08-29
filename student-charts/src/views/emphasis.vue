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
            <span v-for="(item,index) in list" :key="index" @click="clickClass(item,index)" :class="index===ind?'activeC':''">
              {{item.class_name}}
            </span>
            <el-button type="text" @click="dialogFormExam = true">创建班级 +</el-button>
          </li>
        </ul>
      </div>
      <div class="addStude">
        <p>
          <span>添加学生 + : </span>
          <input type="text" placeholder="输入姓名" v-model="emphasiss.stu_name" />
          <input type="text" placeholder="末位次数" v-model="emphasiss.repetitions"/>
          <input type="text" placeholder="结对子,帮扶对象"  v-model="emphasiss.description"/>
          <button @click="addStudent">添加</button>
        </p>
      </div>

      <div class="brokenEacher" v-for="(item,index) in studentListL" :key="index+'studentListL'">
        <Eacher :data="item"></Eacher>
        <AddCj :data="item"></AddCj>
      </div>
    </div>

    <!-- 创建班级 -->
    <el-dialog title="新添成绩--xx学生" :visible.sync="dialogFormExam">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="班级名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="教室号" prop=" ">
          <el-input v-model="ruleForm.teacher"></el-input>
        </el-form-item>
        <el-form-item label="辅导员" prop="instructor">
          <el-input v-model="ruleForm.instructor"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormExam = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import "../sass/emphasis.scss";
import Header from "../components/heade";
import Eacher from "../components/eacher";
import AddCj from "../components/addCj";
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {
    Header,
    Eacher,
    AddCj
  },
  data() {
    return {
      dialogFormExam: false,
      //添加班级
      ruleForm: {
        name: "",
        teacher: "",
        instructor: ""
      },
      //添加班级cid
      cid:'',
      ind:0,
      class_info:'',// 辅导员
      //添加班级正则规则
      rules: {
        name: [
          { required: true, message: "请输入班级名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        teacher: [{ required: true, message: "请输入教室号", trigger: "blur" }],
        instructor: [
          { required: true, message: "请输入辅导员", trigger: "blur" },
          { min: 2, max: 3, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      },
      //添加重点学生
      emphasiss:{
         stu_name:'',
         repetitions:'',
         description:''
      }
    };
  },
  computed: {
    ...mapState({
      list: state => state.emphasis.list,
      studentListL:state => state.emphasis.studentListL,
    })
  },
  methods: {
    ...mapActions({
      getcreate: "emphasis/getcreate",
      getLists: "emphasis/getLists",
      getaddStudent:'emphasis/getaddStudent',
      gerecordlists:'emphasis/gerecordlists',
    }),
    //确定
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("添加成功!");
        } else {
          alert("不要重复添加!!");
          return false;
        }
      });
      //添加班级传参
      this.getcreate({
        classname: this.ruleForm.name,
        classroom: this.ruleForm.teacher,
        assistant: this.ruleForm.instructor,
        type: "create"
      });
    },
    //点击班级
    clickClass(item,index){
      this.cid=item.cid;
      this.ind=index;
      this.class_info=item.class_info;
       this.gerecordlists({
         cid:this.cid,
    })
    },
    //添加学生
    addStudent(){
      this.getaddStudent({
       stu_name:this.emphasiss.stu_name,
       repetitions:this.emphasiss.repetitions,
       description:this.emphasiss.description,
       cid:this.cid,
       class_info:this.class_info
      }),
      this.gerecordlists({
         cid:this.cid,
    })
    }
    
  },
  created() {
  
  },
  mounted() {
    this.getLists();
  }
};
</script>
<style scoped lang="scss">
</style>