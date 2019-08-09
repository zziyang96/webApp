<template>
<div id="register">
    <div class="demo demo-register">
        <el-breadcrumb separator="/" class="register-title">
            <!-- <el-breadcrumb-item ><i class="el-icon-setting"></i>注册</el-breadcrumb-item> -->
        </el-breadcrumb>
    </div>
    <div class="userContent">
        <p class="top-title"><i class="el-icon-s-custom"></i>用户注册</p>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
            <el-form-item prop="username" label="用户名" style="margin-top:30px;margin-bottom:23px;">
                <el-input v-model="form.username" placeholder="请输入用户名称"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码" style="margin-top:5px;margin-bottom:23px;">
                <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="realname" label="真实姓名" style="margin-top:5px;margin-bottom:23px;">
                <el-input v-model="form.realname" placeholder="请输入真实姓名"></el-input>
            </el-form-item>
            <el-form-item prop="sex" label="性别" style="margin-top:5px;margin-bottom:23px;">
                <el-select class="select-sex" v-model="form.sex" placeholder="请选择性别">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="telphone" label="手机" style="margin-top:5px;margin-bottom:23px;">
                <el-input v-model="form.telphone" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item prop="email" label="邮箱" style="margin-top:5px;margin-bottom:23px;">
                <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="idType" label="证件号" style="margin-top:5px;margin-bottom:23px;">
                <el-input v-model="form.idType" placeholder="请输入身份证件号"></el-input>
            </el-form-item>
            <el-form-item prop="department" label="部门" style="margin-top:5px;margin-bottom:23px;">
                <el-select class="select-department" v-model="form.department" placeholder="请选择所属部门" >
                    <el-option label="研发开发" value="研发开发"></el-option>
                    <el-option label="技术支持" value="技术支持"></el-option>
                    <el-option label="商务" value="商务"></el-option>
                    <el-option label="人力资源" value="人力资源"></el-option>
                    <el-option label="测试" value="测试"></el-option>
                    <el-option label="管理" value="管理"></el-option>
                    </el-select>
            </el-form-item>
            <el-form-item prop="branch" label="分支" style="margin-top:5px;margin-bottom:23px;">
                <el-select class="select-branch" v-model="form.branch" placeholder="请选择所属分支" >
                    <el-option label="深圳" value="深圳"></el-option>
                    <el-option label="杭州" value="杭州"></el-option>
                    <el-option label="广州" value="广州"></el-option>
                    <el-option label="顺德" value="顺德"></el-option>
                    </el-select>
            </el-form-item>
            <el-form-item>
                <div class="btn">
                    <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
                    <el-button @click="onCancle()">返回登录</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script>
import Util from '../utils/utils';
export default {
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.form.checkPass !== '') {
                    this.$refs.form.validateField('checkPass');
                }
                callback();
            }
        };
        var validateEmail = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入邮箱'));
            } else if (!Util.emailReg.test(this.form.email)) {
                callback(new Error('请输入正确的邮箱'));
            } else {
                callback();
            }
        };
        var validatetelphone = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入手机号'));
            } else if (!Util.telphoneReg.test(this.form.telphone)) {
                callback(new Error('请输入正确的手机号'));
            } else {
                callback();
            }
        };
        var validateidType = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入证件号号'));
            } else if (!Util.idTypeReg.test(this.form.idType)) {
                callback(new Error('请输入正确的证件号号'));
            } else {
                callback();
            }
        };
        return {
            form: {
                username: '',
                password: '',
                realname: '',
                sex: '',
                telphone: '',
                email: '',
                idType: '',
                department: '',
                branch: ''
            },
            rules: {
                username: [{
                    required: true,
                    message: '请输入用户名',
                    trigger: 'blur'
                }],
                realname: [{
                    required: true,
                    message: '请输入真实姓名',
                    trigger: 'blur'
                }],
                password: [{
                    required: true,
                    validator: validatePass,
                    trigger: 'blur'
                }],
                email: [{
                    required: true,
                    validator: validateEmail,
                    trigger: 'blur'
                }],
                telphone: [{
                    required: true,
                    validator: validatetelphone,
                    trigger: 'blur'
                }],
                idType: [{
                    required: true,
                    validator: validateidType,
                    trigger: 'blur'
                }],
                sex: [{
                    required: true,
                    message: '请选择性别',
                    trigger: 'blur'
                }],
                department: [{
                    required: true,
                    message: '请选择部门',
                    trigger: 'blur'
                }],
                branch: [{
                    required: true,
                    message: '请选择分支',
                    trigger: 'blur'
                }],
            }
        }
    },
    methods: {
        onSubmit(formName) {
            const self = this;
            self.$refs[formName].validate((valid) => {
                if (valid) {
                    this.axios
                    .post('/api/addUser', self.form).then(function (response) {
                        console.log(response);
                        self.$router.push('/register_success');
                    }).then (function (error) {
                        console.log(error);
                    })
                }else {
                    console.log('error submit!!');
                    return false
                }
            });

        },
        onCancle() {
            this.$router.push('/login');
        },
        getDateTimes(str) {
            var str = new Date(str);
            return str;
        }
    }
}
</script>

<style scoped>
html, body{
    margin: 0;
    padding: 0;
}
html, body, #app, .register{
  height: 100%;
  width: 100%;
  background-color: white;
}
body{
    background-color: white;
}
.top-title{
    font-size: 35px;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 10px;
    font-weight: bold;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

}
.demo-register {
    background-color: #324157;
    height: 50px;
    line-height: 50px;
}
.register-title {
    line-height: 50px;
    margin: 0 auto;
    width: 50px;
    font-size: 20px;
}
.userContent {
    width: 400px;
    margin: 0 auto;
}
.select-sex {
    width: 320px;
}
.select-department {
    width: 320px;
}
.select-branch {
    width: 320px;
}
.el-button--primary{
  width: 35%;
  color: white;
  font-size: 14px;
  padding: 11px 0;
  border-radius: 4px;
  background-color: #545c64;
  border-color: #545c64;
}
/* .btn{
    text-align: center;
} */
.demo-register{
    height: 60px;
}
</style>
