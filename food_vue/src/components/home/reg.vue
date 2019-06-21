<template>
  <div class="reg">
    <!-- <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button> -->
    <el-dialog title="注册" :visible.sync="centerDialogVisible" width="30%" center :before-close="myclose2" :append-to-body="true">
    <div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <!-- 用户名 -->
        <el-form-item prop="uname">
          <el-input type="text" v-model="ruleForm.uname" autocomplete="off" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <!-- 确认密码 -->
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <!-- 操作按钮 -->
        <el-form-item>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')" :before-close="myclose2">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    </el-dialog>
  </div>
</template>

<script>
import qs from 'qs';
  export default {
      props:{centerDialogVisible: false},
      data() {
        //  验证用户名
        var validateUname = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入用户名'));
          } else {
            if (this.ruleForm.uname !== '') {
              var reg = /^[a-zA-Z0-9]{4,16}$/;
              if(!reg.test(value)){
                callback(new Error('用户名格式不正确（数字、字母组成、长度4-16位）'));
              }
              // this.$refs.ruleForm.validateField('uname');
            }
            callback();
          }
        };
        //  验证密码
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm.checkPass !== '') {
              this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
          }
        };
        // 验证再次输入密码
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm.pass) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        return {
          ruleForm: {
            uname:'',  
            pass: '',
            checkPass: '',
          },
          rules: {
            uname: [
              { validator: validateUname, trigger: 'blur' }
            ],
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ]
          }
        };
    },
methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var postData=qs.stringify({
              uname:this.ruleForm.uname,
              upwd:this.ruleForm.pass
            });
            this.axios.post("/login/reg",postData).then(result=>{
              var msg=result.data.msg;
              if(msg=="reg suc"){
                this.$message({
                  message: '注册成功，请登录',
                  type: 'success',
                  duration:1000,
                  customClass:'zZindex'
                });
                this.$emit("receive",1);
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      myclose2(){
          this.$parent.myclose2();
      },
    }
  }

   
</script>
<style>
.zZindex {
    z-index:4000 !important;
  }
    .reg{background: #000;}
    .el-message{top:40% !important;}
    /* .el-message--success .el-message__content{color:#ff2e64 !important;} */
    /* .el-message--success{background-color: #f8d9e1 !important;border-color: #fc86a5 !important;} */
    .el-message__content{font-size: 1rem !important;}
    .el-button--small{width:100% !important;}
    /* .el-message__icon{font-size: 1.25rem;color:#ff2e64 !important;} */
</style>
