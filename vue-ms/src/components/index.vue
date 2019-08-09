<template>
<div id="index">
    <h1></h1>
    <!-- {{  $store.state.userinfo  }} -->
    <el-container style="border: 1px solid #eee;">
        <!--左侧导航 -->
        <el-aside width="200px" style="background-color: rgb(238, 241, 246);">
            <el-menu default-active="/" :default-openeds="['1','2','3']" router background-color="#545c64" text-color="#fff">

                <el-menu-item index="/index" class="top-text" style="background:#333; padding: 0 0 10px 10px; margin-top: 3px;">
                    <i class="el-icon-trophy-1"></i>
                    <a style="">KIWI - 物料管理界面</a>
                </el-menu-item>

                <!-- 下滑导航1 -->
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-s-custom"></i>账号管理
                    </template>
                    <el-menu-item index="admin" class="el-icon-view">管理员</el-menu-item>
                    <el-menu-item index="userlist" class="el-icon-coin">用户列表</el-menu-item>
                    <el-menu-item index="useredit" class="el-icon-edit-outline">用户管理</el-menu-item>
                    <el-menu-item index="useradd" class="el-icon-circle-plus-outline">添加账号</el-menu-item>
                </el-submenu>

                <!-- 下滑导航2 -->
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-s-grid"></i>物料管理
                    </template>
                    <el-menu-item index="categories" class="el-icon-s-order">物料分类</el-menu-item>
                    <el-menu-item index="materialslist" class="el-icon-document">物料列表</el-menu-item>
                    <el-menu-item index="materialsmanage" class="el-icon-s-check">物料登记</el-menu-item>
                    <el-menu-item index="materialsadd" class="el-icon-folder-add">物料录入</el-menu-item>
                    <el-menu-item index="materialsout" class="el-icon-document-remove">物料提出</el-menu-item>
                </el-submenu>

                <!-- 下滑导航3 -->
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-setting"></i>系统管理
                    </template>
                    <el-menu-item index="systemmain" class="el-icon-set-up">系统首页</el-menu-item>
                    <el-menu-item index="systemout" class="el-icon-switch-button">系统登出</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>

        <!--右侧内容 -->
        <el-container>

            <el-header style="text-align: right; font-size: 12px;margin-bottom:-5px;">
                <el-dropdown trigger="click" @command="handleCommand">
                    <i class="el-icon-setting" style="margin-right: 5px"></i>
                    <el-dropdown-menu>
                        <el-dropdown-item command="home">个人信息</el-dropdown-item>
                        <el-dropdown-item command="logout">退出系统</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span class="hello">Hello,&#8197;</span>
                <span class="username">{{ username }}</span>
            </el-header>

            <!-- router export -->
            <router-view></router-view>
        </el-container>
    </el-container>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'

export default {
    data() {
        return {
            tableData: [{
                // username: "",
                // realname: "",
                // idType:"",
                // department: ""
            }]
        };
    },
    methods: {
        //登出
        handleCommand(command) {
            console.log('logout')
            if(command == 'logout'){
                localStorage.removeItem('userinfo')
                this.$router.push('/login');
            }else if (command == 'home') {
                this.$router.push('/index');
            }
        },
    },

    computed: {
        ...mapState({
            username: state => state.userinfo.username
        })
    }
};
</script>

<style scoped>
.el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
}

.username {
    font-size: 16px;
    color: #4093ff;
}

html,
body,
#app,
.index {
    height: 100%!important;
    background-color: #fff;
}

.index {
    width: 100%!important;
    height: 100%;
}

.el-menu {
    border-right: 0;
}

.el-aside {
    background-color: #545c64 !important;
}

html,
body {
    margin: 0;
    padding: 0;
}

.el-container {
    height: 100% !important;
}

.top-text {
    font-size: 14px;
}

a {
    font-size: 15px;
}

.el-aside .el-menu-item {
    font-size: 13px;
    font: italic;
}
</style>
