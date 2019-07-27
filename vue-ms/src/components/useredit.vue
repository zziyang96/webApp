<template>
  <div class="useredit">

    <el-main>
      <div class="info_container">
        <el-row :gutter="30">
          <!-- 左边栏 --> 
          <el-col :span="12">
            <div class="area">
              <p class="title" style="color:#4093ff;"><i class="fa fa-edit"></i><i class="el-icon-edit-outline"></i>信息更新</p>
              <div class="content">
                <el-form class="form"  :model="infoForm" :rules="infoRules" ref="infoForm" label-width="80px">
                  <el-form-item label="用户名" prop="username" >
                    <el-input v-model="infoForm.username"  size="small"  placeholder="请输入用户名"></el-input>
                  </el-form-item>
                  <el-form-item label="个人姓名" prop="realname">
                    <el-input v-model="infoForm.realname" size="small" placeholder="请输入真实姓名"></el-input>
                  </el-form-item>
                  <el-form-item label="性别" prop="sex">
                    <el-radio v-model="infoForm.sex" label="1">男</el-radio>
                    <el-radio v-model="infoForm.sex" label="2">女</el-radio>                  
                  </el-form-item>
                  <el-form-item label="证件号" prop="idType">
                    <el-input v-model="infoForm.idType" size="small" placeholder="请输入证件号"></el-input>
                  </el-form-item>
                  <el-form-item label="邮箱" prop="email">
                    <el-input v-model="infoForm.email" size="small" placeholder="请输入邮箱"></el-input>
                  </el-form-item>
                  <el-form-item label="手机" prop="telphone">
                    <el-input v-model="infoForm.telphone" size="small" placeholder="请输入手机"></el-input>
                  </el-form-item>
                  <el-form-item label="部门" prop="department">
                    <el-select v-model="infoForm.department" size="small" placeholder="请选择所属部门" >
                      <el-option label="研发开发" value="1"></el-option>
                      <el-option label="技术支持" value="2"></el-option>
                      <el-option label="商务" value="3"></el-option>
                      <el-option label="人力资源" value="4"></el-option>
                      <el-option label="测试" value="5"></el-option>
                      <el-option label="管理" value="6"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="分支" prop="branch">
                    <el-select v-model="infoForm.branch" size="small" placeholder="请选择所属分支" >
                      <el-option label="深圳" value="1"></el-option>
                      <el-option label="杭州" value="2"></el-option>
                      <el-option label="广州" value="3"></el-option>
                      <el-option label="顺德" value="4"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="个人图片(optional)" prop="userimage">
                    <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="uploadImg" :before-upload="beforeImgUpload">
                      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm('infoForm')">立即修改</el-button>
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
                <p class="title" style="color:#4093ff;"><i class="fa fa-edit"></i><i class="el-icon-lock"></i>密码修改</p>
                <el-form class="form"  :model="pwdForm" :rules="pwdRules" ref="pwdForm" label-width="100px">
                <el-form-item label="原密码" prop="password">
                  <el-input type="password" v-model="pwdForm.password" auto-complete="off" size="small" placeholder="请输入原密码"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newpassword">
                  <el-input type="password" v-model="pwdForm.newpassword" auto-complete="off" size="small" placeholder="请输入新密码"></el-input>
                </el-form-item>
                <el-form-item label="确认新密码" prop="surepassword">
                  <el-input type="password" v-model="pwdForm.surepassword" auto-complete="off" size="small" placeholder="请输入确认新密码"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('pwdForm')">提交</el-button>
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
import {mapState} from 'vuex' 

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
    let validateNewpassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码~'));
      } else {
        if (this.pwdForm.surepassword !== '') {
          this.$refs.pwdForm.validateField('surepassword');
        }
        callback();
      }
    };
    let validateSurepassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入确认密码~'));
      } else if (value !== this.pwdForm.newpassword) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
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
        surepassword:''
      },
      infoRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
        ],
        realname: [
          { required: true, message: '请输入真实姓名', trigger: 'blur' },
          { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
        ],
        email: [
          {required: true, validator: validateEmail, trigger: 'blur'}
        ],
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
        idType: [
          {required: true, message:'请输入你的证件号', trigger: 'blur'}
        ],
      },
      pwdRules: {
        password: [
          { required: true, message: '请输入原密码', trigger: 'blur' },
        ],
        newpassword: [
          { required: true, validator:validateNewpassword, trigger: 'blur' },
        ],
        surepassword: [
          { required: true, validator:validateSurepassword, trigger: 'blur' },
        ],
      },
    }
  },
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(formName == 'pwdForm'){
            this.showMessage('success','修改密码成功~');
          }else if(formName == 'infoForm'){ // 判断手机服务是否为空
            this.infoForm.phone = this.infoForm.telphone;
            for(let key in this.infoForm){
              if(this.infoForm[key] == ''){
                this.showMessage('warning','请您选择手机服务~');
                return;
              }
            }
          }else if(formName == 'infoForm'){// 判断修改信息是否为空
            this.infoForm.telphone = this.infoForm.phone;
            for(let key in this.infoForm){
                if(this.infoForm[key] == ''){
                    this.showMessage('warning','请您修改相关信息~');
                    return;
                }
            }
          }
          //保存修改的相关信息
          let userinfo = this.infoForm;
          let userData = Object.assign(userinfo);
          console.log(userData);
          axios({
              type:'get',
              path:'/src/components/useredit',
              data:userData,
              fn:data=>{
          		console.log(data);
          		if(data.status == 1){
          			this.showMessage('success','修改密码成功~');
                      this.$router.push('/userlist');
          		}else{
          			 this.$message.error('修改失败请重试')
          		}
          	},
          	errFn:(res)=>{
                  this.showMessage('error',res.message);
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
  },
  computed:{
    ...mapState({})
  }
};
</script>


<style>
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

