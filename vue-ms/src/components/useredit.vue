<template>
  <div class="useredit">

    <el-main>
      <div class="info_container">
        <el-row :gutter="30">
          <!-- 左边栏 --> 
          <el-col :span="12">
            <div class="area">
              <p class="title" style="color:#4093ff; width: 500px; margin-top:-20px;"><i class="fa fa-edit"></i><i class="el-icon-edit-outline"></i>信息更新</p>
              <div class="content">
                <el-form class="form"  :model="infoForm" :rules="infoRules" ref="infoForm" label-width="80px">
                  <el-form-item label="用户名" prop="username" style="width:450px;margin-top:10px;margin-bottom:20px;">
                    <el-input v-model="infoForm.username"  size="small"  placeholder="请输入用户名"></el-input>
                  </el-form-item>
                  <el-form-item label="姓名" prop="realname" style="width:450px;margin-top:-5px;margin-bottom:10px;">
                    <el-input v-model="infoForm.realname" size="small" placeholder="请输入真实姓名"></el-input>
                  </el-form-item>
                  <el-form-item label="性别" prop="sex" style="width:300px;margin-top:-5px;">
                    <el-radio v-model="infoForm.sex" label="男">男</el-radio>
                    <el-radio v-model="infoForm.sex" label="女">女</el-radio>                  
                  </el-form-item>
                  <el-form-item label="证件号" prop="idType" style="width:450px;margin-top:-5px;margin-bottom:20px;">
                    <el-input v-model="infoForm.idType" size="small" placeholder="请输入证件号"></el-input>
                  </el-form-item>
                  <el-form-item label="邮箱" prop="email" style="width:450px;margin-top:-5px;margin-bottom:20px;">
                    <el-input v-model="infoForm.email" size="small" placeholder="请输入邮箱"></el-input>
                  </el-form-item>
                  <el-form-item label="手机" prop="telphone" style="width:450px;margin-top:-5px;margin-bottom:15px;">
                    <el-input v-model="infoForm.telphone" size="small" placeholder="请输入手机"></el-input>
                  </el-form-item>
                  <el-form-item label="部门" prop="department" style="width:450px;margin-top:-5px;margin-bottom:15px;">
                    <el-select v-model="infoForm.department" size="small" placeholder="请选择所属部门" >
                      <el-option label="研发开发" value="研发开发"></el-option>
                      <el-option label="技术支持" value="技术支持"></el-option>
                      <el-option label="商务" value="商务"></el-option>
                      <el-option label="人力资源" value="人力资源"></el-option>
                      <el-option label="测试" value="测试"></el-option>
                      <el-option label="管理" value="管理"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="分支" prop="branch" style="width:450px;margin-top:-5px;margin-bottom:5px;">
                    <el-select v-model="infoForm.branch" size="small" placeholder="请选择所属分支" >
                      <el-option label="深圳" value="深圳"></el-option>
                      <el-option label="杭州" value="杭州"></el-option>
                      <el-option label="广州" value="广州"></el-option>
                      <el-option label="顺德" value="顺德"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="个人图片(optional)" prop="userimage">
                    <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="uploadImg" :before-upload="beforeImgUpload">
                      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="updateUserInfo('infoForm')">立即更新</el-button>
                    <el-button @click="resetForm('infoForm')">重置</el-button>
                  </el-form-item>
                </el-form>
              </div>
          </div>
        </el-col>

        <!-- 右边栏 -->
        <el-col :span="12">
          <div class="area">
              <div class="pwdarea">
                <p class="title" style="color:#4093ff; width: 500px; margin-top:-20px;"><i class="fa fa-edit"></i><i class="el-icon-lock"></i>密码修改</p>
                <el-form class="form"  :model="pwdForm" :rules="pwdRules" ref="pwdForm" label-width="100px">
                <el-form-item label="原密码" prop="password" style="width: 450px; margin-top:10px;margin-bottom:20px;">
                  <el-input type="password" v-model="pwdForm.password" auto-complete="off" size="small" placeholder="请输入原密码"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newpassword" style="width: 450px; margin-top:10px;margin-bottom:20px;">
                  <el-input type="password" v-model="pwdForm.newpassword" auto-complete="off" size="small" placeholder="请输入新密码"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="updatePwd('pwdForm')">立即修改</el-button>
                  <el-button @click="resetForm('pwdForm')">重置</el-button>
                </el-form-item>
                </el-form>
              </div>
          </div>
          </el-col>

        </el-row>
      </div>
    </el-main> 
     
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex' 

export default {
  data(){
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
    let validatePhone = (rule, value, callback) => {
      if(value == ''){
        callback(new Error('请输入手机号码~'));
      }{
        let phoneRegex = /^1[34578]\d{9}$/;
        if (!phoneRegex.test(value)) {
          callback(new Error('手机号码格式不正确！'))
        } else {
          callback();
        }
      }
    };
    return{
      infoForm:{
        username:'',
        realname:'',
        email:'',
        telphone:'',
        department:'',
        idType:'',
        branch:'',
        imageUrl: '',
        userimage:'',
        sex:''
      },
      pwdForm:{
        password:'',
        newpassword:'',
      },
      infoRules: {
        // username: [
        //   { required: true, message: '请输入用户名', trigger: 'blur' },
        //   { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
        // ],
        // realname: [
        //   { required: true, message: '请输入真实姓名', trigger: 'blur' },
        //   { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
        // ],
        // email: [
        //   {required: true, validator: validateEmail, trigger: 'blur'}
        // ],
        // sex: [
        //   {required: true, message:'请选择您的性别', trigger: 'change' },
        // ],
        // telphone: [
        //   {required: true, validator: validatePhone, trigger: 'blur' },
        // ],
        // department: [
        //   {required: true, message:'请选择所属部门', trigger: 'blur'}
        // ],
        // branch: [
        //   {required: true, message:'请选择所属分支', trigger: 'blur'}
        // ],
        // idType: [
        //   {required: true, message:'请输入你的证件号', trigger: 'blur'}
        // ],
      },
      pwdRules: {
        password: [
          { required: true, message: '请输入原密码', trigger: 'blur' },
        ],
        newpassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
        ],
        
      },
    }
  },
  

  // created() {
  //   this.$store.dispatch('GET_USERLIST').then(() => {
  //     this.infoForm = this.userList;
  //   })
  // },
  methods: {
    //照片上传
    uploadImg(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeImgUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isJPEG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/jpeg';
      const isLt3M = file.size / 1024 / 1024 < 3;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isPNG) {
        this.$message.error("上传头像图片只能是 PNG 格式!");
      }
      if (!isJEPG) {
        this.$message.error("上传头像图片只能是 JEPG 格式!");
      }
      if (!isLt3M) {
        this.$message.error("上传头像图片大小不能超过 3MB!");
      }
      return isJEPG && isPNG && isJPG && isLt3M;
    },

    //获取用户数据用于修改
    getUserData(){
      const self = this;
      let username = JSON.parse(localStorage.getItem('userinfo')).username;
      this.axios
      .get('/api/getuserlist', {username:username}).then(function(response) {
        console.log(response);
        let result = response.data[0];
        // let result = new result([response.data]);
        self.infoForm.id = result.id;
        self.infoForm.username = result.username;
        self.infoForm.realname = result.realname;
        self.infoForm.email = result.email;
        self.infoForm.telphone = result.telphone;
        self.infoForm.department = result.department;
        self.infoForm.idType = result.idType;
        self.infoForm.branch = result.branch;
        self.infoForm.sex = result.sex;
        localStorage.setItem('userinfo',result.id);
      }).then(function(error) {
        console.log(error);
      })
    },

    //修改信息
    updateUserInfo(formName) {
      const self = this;
      let formData = {
        id: self.infoForm.id,
        username: self.infoForm.username,
        realname: self.infoForm.realname,
        email: self.infoForm.email,
        telphone: self.infoForm.telphone,
        department: self.infoForm.department,
        idType: self.infoForm.idType,
        branch: self.infoForm.branch,
        sex: self.infoForm.sex
      };
      self.$refs[formName].validate((valid) => {
          if (valid) {
              this.axios
              .post('/api/updateUser', formData).then(function (response) {
                  console.log(response);
                  self.$router.push('/userlist');
              }).then (function (error) {
                  console.log(error);
              })
          }else {
              console.log('error submit!!');
              return false
          }
      });
    },

    //修改密码
    updatePwd(formName) {
      const self = this;
      const userInfo = JSON.parse(localStorage.getItem('userinfo'));
      let formData = {
        id: userInfo["id"],
        password: self.pwdForm.password,
        newpassword: self.pwdForm.newpassword
      };
      self.$refs[formName].validate((valid) => {
          if (valid) {
              this.axios
              .post('/api/changePassword', formData).then(function (response) {
                  console.log(response);
                  self.$router.push('/userlist');
              }).then (function (error) {
                  console.log(error);
              })
          }else {
              console.log('error submit!!');
              return false
          }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  computed:{
    ...mapState({
      // userList: state => state.userList,
    })
  },
  mounted() {
    this.getUserData();
  }
};
</script>


<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.useredit{
  width: 100%;
  height: 100%;
}
.hello{
  font-size: 16px;
}
.username{
  font-size: 16px;
  color: #4093ff;
}
.info_container{
  padding: 20px;
  background: none;
  /* box-sizing: border-box; */
  overflow: auto;
}
.title{
  text-align:center;
  width:100%;
  height:30px;
  line-height:30px;
  cursor: pointer;
  background-color: #545c64;
  border:1px solid #545c64;
  border-radius: 10px;
  color: white;
  display: block;
}
.title .fa{
  margin-right:5px;
}
/* .el-row{
  margin-top: -10px;
} */
.info_row .area{
  border:1px solid #dfdfdf;
  height:90%;
  font-size:14px;
  padding:10px;
}
.info_row .area .form{
  width:90%;
  margin-top:20px;
}
.el-form .el-form-item .el-button--primary{
  background-color:#545c64;
  border-color: #333;
}
.el-form .el-form-item{
    margin-top: 5px;
    margin-bottom: 5px;
    font: italic;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 150px;
  height: 150px;
  line-height: 150px;
  text-align: center;
}
.avatar {
  width: 150px;
  height: 150px;
  display: block;
}
.el-main .el-row{
  /* display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center; */
  height: 100%;
}
</style>

