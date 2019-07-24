<template>
  <div class="login">
    <!-- <h1>登录界面</h1> -->
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
      <h1 class="title">
        Welcome back
      </h1>
      
      <el-form-item label="Username" prop="username">
        <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">Login in</el-button>
        <el-button @click="resetForm('loginForm')">Reset</el-button>

      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //登录表单数据
      loginForm: {
        username: '',
        password: '',
      },
      //验证规则
      rules: {
        username: [
          { required: true, message: 'Please enter your username', trigger: 'blur' },
          { min: 3, max: 5, message: 'length between 3 to 5 ', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please enter your password', trigger: 'blur' },
          { min: 6, max: 32, message: 'Length between 6 to 32', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //保留this
          let _this = this;
          //获取用户名和密码， 提交到后端
          this.axios.post('/api/checklogin',{
            params: {
              username: _this.loginForm.username,
              password: _this.loginForm.password
            }
          })
          .then(response => {
            console.log('接收后端响应登录请求：', response.data)
          })          
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

html,body {
  margin: 0;
  padding: 0;
}
html, body, #app, .login {
  height: 100%;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-form {
  width: 400px;
  border: 1px solid rgb(180, 180, 180,.2);
  border-radius: 30px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 45px 10px 10px;
  /* background-color: rgba(104, 103, 103, 0.1); */
}
.el-form-item__label{
  color:  white;
}

.el-form .el-form-item__content{
  align-content: center;
}

.el-form .title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 30px;
  color: black;
  font-weight: bold;
  margin: 20px 60px 20px 60px;
}
</style>
