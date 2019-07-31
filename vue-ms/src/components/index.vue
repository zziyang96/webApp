<template>
  <div class="index">
    <h1></h1>
    <div class="index1">
      <!-- {{  $store.state.userinfo  }} -->
      <el-container style="border: 1px solid #eee">
        <!--左侧导航 -->
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu default-active="/" :default-openeds="['1','2']" router background-color="#545c64" text-color="#fff">

            <el-menu-item index="/main" class="top-text" style="background:#333; padding: 0 0 10px 10px; margin-top: 3px;">
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
              <el-menu-item index="materials" class="el-icon-s-order">物料分类</el-menu-item>
              <el-menu-item index="materialslist" class="el-icon-document">物料列表</el-menu-item>
              <el-menu-item index="materialsadd" class="el-icon-folder-add">物料增删</el-menu-item>
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
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 5px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="home">个人信息</el-dropdown-item>
              <el-dropdown-item command="signout">退出系统</el-dropdown-item>
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
  </div>
</template>

<script>
import {mapState} from 'vuex' 

export default {
  data() {
    return {
      tableData: [
        {
          username: "",
          realname: "",
          idType:"",
          department: ""
        }
      ]
    };
  },
  mounted() {},
  methods: {
  },



  computed:{
    ...mapState({
      username: state => state.userinfo.username
    })
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.index1{
    display: flex;
    flex: 1;
}
.el-menu {
  border-right: 0;
}
.el-aside {
  background-color: #545c64!important;
}
html,
body,
#app,
.index {
    display: flex;
    flex: 1;
    height: 100%;
    background-color: #fff;

}
.el-container {
  height: 100%!important;
}
.top-text {
  font-size: 14px;
}

a{
  font-size: 15px;
}
/* .el-submenu .el-menu-item{
  color:#FDD04B;
} */
.el-aside .el-menu-item{
  font-size: 13px;
  font:italic;
}
</style>

