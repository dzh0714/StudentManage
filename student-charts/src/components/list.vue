<template>
  <div>
    <p>
      <span>1</span>
      <span>11-02-2017</span>
      <span>89</span>
      <span>Tingsbnjbbj</span>
      <span>vdscdscdscds</span>
      <span>fou</span>
      <span>
        <i>编辑</i>
        <i>删除</i>
      </span>
    </p>
    <p>
      <span>1</span>
      <span>11-02-2017</span>
      <span>89</span>
      <span>Tingsbnjbbj</span>
      <span>vdscdscdscds</span>
      <span>fou</span>
      <span>
        <!-- <i @click="compile()">编辑</i> -->
        <i type="text" @click="dialogFormVisible = true">编辑</i>
        <i @click="remove()">删除</i>
      </span>
    </p>

    <el-dialog title="编辑内容" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="理论" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" placeholder="0-100之间的数字"></el-input>
        </el-form-item>
        <el-form-item label="技能" :label-width="formLabelWidth">
          <el-input v-model="form.region" autocomplete="off" placeholder="0-100之间的数字"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked">日考</el-checkbox>
        <el-checkbox v-model="Zchecked">周考</el-checkbox>
        <el-form-item label="分析解决方案" :label-width="formLabelWidth">
           <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="textarea">
        </el-input>
        </el-form-item>
      
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        type: []
      },
      formLabelWidth: "120px",
      checked: true,
      Zchecked:true,
      textarea: ''
    };
  },
  computed: {},
  methods: {
    // compile() {
    //   this.$alert("这是一段内容", "标题名称", {
    //     confirmButtonText: "确定",
    //     callback: action => {
    //       this.$message({
    //         type: "info",
    //         message: `action: ${action}`
    //       });
    //     }
    //   });
    // },
    remove() {
      this.$confirm("您确定要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
</style>