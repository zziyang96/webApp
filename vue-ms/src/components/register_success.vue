<template>
	<div id="register_success">
		<div class="demo demo-register">
			<el-breadcrumb separator="/" class="register-title">
                <el-breadcrumb-item><i class="el-icon-setting"></i>注册成功</el-breadcrumb-item>
            </el-breadcrumb>
		</div>
		<div class="userContent">
			<div class="eidt-success">
                <div class="show-success">
                    <!-- <i class="el-icon-check"></i>&nbsp;&nbsp;<span>恭喜您，注册成功</span> -->
                    <p>Welcome to join</p>
                </div> 
                <div class="click-login">
                    <a href="#" @click="handleCommand()">跳转登录</a>
                </div>            	
            </div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
            return {
				form: {}
			}
        },
        methods: {
            handleCommand() {
                this.$router.push('/login');
            }
        }	
    }
	
</script>

<style scoped>
.demo {
    margin-bottom: 0;
}
.demo-register {
    background-color: #324157;
    height: 50px;
    line-height: 50px;
}
.register-title {
    line-height: 50px;
    margin: 0 auto;
    width: 100px;
    font-size: 16px;
}	
.userContent {
    width: 100%;
    margin: 0 auto;
    background-image: url('../../static/img/rocket.gif');
    background-size: cover;
    height: 400px;
}
.select-sex {
    width: 320px;
}
    .eidt-success {
    width: 400px;
    margin: 0 auto;
    position: relative;
    
}
.eidt-success .show-success {
    position: absolute;
    margin-left: -190px;
    
    left: 50%;
}
.click-login {
    position: absolute;
    margin-left: -40px;
    left: 50%;
    top: 61px;
    margin-top: 530px;
}
.eidt-success i {
    color: #67C23A;
}
.eidt-success i,.eidt-success span {
    font-size: 40px;
    font-family: Microsoft YaHei;
}
p{
    margin-top: 500px;
    text-align: center;
    font-size: 50px;
}
</style>