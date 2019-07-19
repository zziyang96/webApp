<template>
  <div class="login">
    <!--登录表单-->
      <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-loginForm">
        <h1 class="title">
          <!-- <i class="el-icon-setting"></i> -->
          Welcome back
        </h1>
        <el-form-item  label="Username" prop="username">
          <el-input type="text" v-model="loginForm.username" placeholder="Please enter your username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="Please enter your password" autocomplete="off"></el-input>
        </el-form-item>
      
        <el-form-item class="btn">
          <el-button  type="primary" @click="submitForm('loginForm')">Login In</el-button>
          <el-button  @click="resetForm('loginForm')">Reset</el-button>
          <el-link href="https://element.eleme.io" target="_blank" style="marin:0; padding: 0 0 4px 15px;">Forget Password</el-link>
        </el-form-item>

      </el-form>
    <!-- <div class="anima">
      <vue-particles
        color="121, 162, 185"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="130,255,255"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      ></vue-particles>
    </div> -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      //登录表单数据
      loginForm: {
        username: "",
        password: ""
      },
      //验证规则
      rules: {
        username: [
          { required: true, message: "Please enter username", trigger: "blur" }, //输入非空
          {
            min: 5, max: 18, message: "Length between 5 - 18 characters", trigger: "blur"} //用户名输入长度
        ],
        password: [
          { required: true, message: "Please enter password", trigger: "blur" }, //输入非空
          {
            min: 6, max: 16, message: "Length between 6 - 16 character", trigger: "blur"} //密码输入长度
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
              password: _this.loginForm.password
            })
            .then(response => {
              if (response.data.length){
                //console.log("接收后端响应登录请求的数据：", response.data[0])

                // 储存用户数据在 state
                _this.$store.commit('SAVE_USERINFO', response.data[0])

                _this.$message({
                  message: "congras, login in success!",
                  type:'success'
                });

                // 登录到后台界面
                _this.$router.push('/main/home')

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
    }
  }
};
</script>

<style>
html,body {
  margin: 0;
  padding: 0;
}
html, body, #app, .login {
  height: 100%;
}
body{
  background:linear-gradient(to bottom right,#000000, #ace3e7);
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-form {
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 400px;
  border: 1px solid rgb(180, 180, 180,.2);
  border-radius: 30px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 0 45px 10px 10px;
  background-color: rgba(104, 103, 103, 0.1);

  /* width: 400px;
  padding: 0 45px 10px 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -200px;
  margin-top: -200px;
  background-color: rgba(137, 139, 139, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px 20px 0 20px;
  text-align: left; */
}


.el-form-item__label{
  color:  white;
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
.anima{
  width: 1200px;
  height: 1000px;
}
</style>
