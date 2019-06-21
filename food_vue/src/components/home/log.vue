<template>
    <div>
        <el-dialog title="登录" :visible.sync="centerDialogVisible" width="30%" center :before-close="myclose2" :append-to-body="true">
          <!--表单部分 -->
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <!-- 用户名 -->
          <el-form-item prop="uname">
            <el-input type="text" v-model="ruleForm.uname" autocomplete="off" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item class="mybutton">
            <el-button type="primary" @click="submitForm('ruleForm')" class="">登录</el-button>
          </el-form-item>
        </el-form>
        <!-- 跳转到注册 -->
        <span slot="footer" class="dialog-footer">
            还没有账号？
            <span class="myspan" @click="sendShow">注册享瘦厨房</span>
        </span>
        </el-dialog>
      </div>
</template>
<script>
import qs from 'qs';
export default {
      props:{centerDialogVisible: false,},
      data() {
        //  验证登录用户名
        var validateUname = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入用户名'));
          } else {
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
        return {
        //   centerDialogVisible: false,
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
          },
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
            this.axios.post("/login/login",postData).then(result=>{
              this.$emit("reName",this.ruleForm.uname);
              var msg=result.data.msg;
              if(msg=="login suc"){
                this.$parent.myclose2();
                this.$message({
                  message: '欢迎你,'+this.ruleForm.uname,
                  type: 'success',
                  duration:3000
                });
              }else{
                this.$message({
                    message: '用户名或密码错误,请重新输入',
                    type: 'warning',
                    duration:1000
                });
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
      sendShow(){
        this.$emit("receive",2);
      },
    },
}
</script>
<style>
.el-button--primary{background-color:#ff2e64 !important;border-color:#ff2e64 !important;}
.el-dialog__headerbtn .el-dialog__close:hover{color:#ff2e64 !important;}
.el-dialog__headerbtn .myback:hover{color:#ff2e64 !important;}

.el-dialog{border-radius: 7px !important;overflow: hidden !important;}
.el-dialog__title{line-height: 60px !important;font-size: 1.25rem !important;font-weight: bold;}
.el-dialog__footer{background:#f1f1f1 !important;padding-top:20px !important;}
.el-form-item__content{margin-left:0 !important;}
.el-button--primary{width:100%}
.el-dialog__header{padding-bottom: 0 !important;}
.el-input__inner{border:none !important;border-bottom:1px solid #DCDFE6 !important;border-radius: 0 !important;}
.el-dialog{width:420px !important;}
.el-dialog--center .el-dialog__body{padding:0 17% 30px !important;}
.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{margin-top:28px;}
.el-form-item--small .el-form-item__error{padding:10px 0 0 15px;}
.el-dialog--center{margin-top:30vh !important;}
.el-button--mini, .el-button--small{font-size: 0.875rem !important;padding:10px 15px !important;}
.myback{left:20px !important;}
.el-dialog__headerbtn{font-size:24px !important;top:30px !important;}
.el-button+.el-button{margin:15px 0 0 0 !important;}
.dialog-footer{color:#b5b8bb}
.myspan{color:#272b2c;}
</style>