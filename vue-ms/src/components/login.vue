<template>
  <div id="login">
      <!--登录表单-->
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-position="center" label-width="0px" class="demo-loginForm login-container">
      <h3 class="title">物料管理系统登录</h3>
      <el-form-item   prop="email">
          <el-input type="text" v-model="loginForm.email" placeholder="请输入你的邮箱" autocomplete="off" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item  prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入你的密码" autocomplete="off" prefix-icon="el-icon-view"></el-input>
        </el-form-item>
      <el-form-item style="width:100%; height: auto;">
        <div class="btn">
          <el-button  type="primary" @click.native.prevent="submitForm('loginForm')">立即登录</el-button>
          <!-- <el-button  @click.native.prevent="resetForm('loginForm')">Reset</el-button> -->
          <el-button class="register" @click.native.prevent="handleCommand()" style="text-decoration:underline; margin-top:8px;">不是用户？点击注册</el-button>
        </div> 
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    let validateEmail = (rule, value, callback) => {
      if(value == ''){
        callback(new Error('请输入邮箱~'));
        return;
      }
      let emailRegex = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      if (!emailRegex.test(value)) {
        callback(new Error('邮箱格式不正确！'))
      } else {
        callback();
      }
    };
    return {
      //登录表单数据
      loginForm: {
        username: "",
        password: "",
        email:"",
        telphone:""
      },
      //验证规则
      rules: {
        username: [
          { required: true, message: "Please enter username", trigger: "blur" }, //输入非空
          { min: 5, max: 18, message: "Length between 5 - 18 characters", trigger: "blur" } //用户名输入长度
        ],
        password: [
          { required: true, message: "Please enter password", trigger: "blur" }, //输入非空
          { mmin: 6, max: 16, message: "Length between 6 - 16 character", trigger: "blur" } //密码输入长度
        ],
        email: [
          {required: true, validator: validateEmail, trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");

          //测试记录用户名和密码
          //console.log(this.loginForm.username, this.loginForm.password)

          //保留this
          let _this = this;
          //记录用户名 发送后端
          this.axios
            .post("/api/checklogin", {
              username: _this.loginForm.username,
              email: _this.loginForm.email,
              password: _this.loginForm.password
            })
            .then(response => {
              if (response.data.length){
                console.log("接收后端响应登录请求的数据：", response.data[0])

                // 储存用户数据在 state
                _this.$store.commit('SAVE_USERINFO', response.data[0])

                _this.$message({
                  message: "congras, login in success!",
                  type:'success'
                });

                // 登录跳转到后台界面
                _this.$router.push('/index')

              } else {
                _this.$message.error('please check your username or password!');
              }
            });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleCommand() {
      this.$router.push('/register');
    }
  }
};
</script>

<style scoped>
html,body {
  margin: 0;
  padding: 0;
}
html, body, #app, .login{
  height: 100%;
  width: 100%;
}
body{
  /* background-color:#4477D3; */
  background-color: white;
}
.login-container {
  /* box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02); */
  -webkit-border-radius: 5px;
  border-radius: 10px;
  -moz-border-radius: 5px;
  background-cwlip: padding-box;
  margin: 180px auto;
  width: 400px;
  height: 330px;
  padding: 35px 35px 15px 35px;
  background: white;
  border: 1px solid #eaeaea;
  /* box-shadow: 0 0 25px #cac6c6; */
  /* box-shadow: 0px 1px 4px rgba(0,0,0,0.3),0px 0px 20px rgba(0,0,0,0.1) inset; */
  box-shadow:15px 0 15px -15px #000, -15px 0 15px -15px #000;
}
.login-container .title {
  margin: 0px auto 40px auto;
  padding: 10px 0;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  font-family: 微软雅黑;
  color: #505458;
  border-bottom: 2px solid gray;
  /* border-bottom-width:5px; */
  border-bottom-style:ridge;
}
.btn{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.el-button--primary{
  width: 35%;
  color: white;
  font-size: 18px;
  border-radius: 4px;
  background-color: #545c64;
  border-color: #545c64;
}
.register{
  border:none;
}
</style>


