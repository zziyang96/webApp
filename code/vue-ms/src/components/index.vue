<template>
  <div class="index">
    <h1></h1>
    <div class="index1">
      <!-- {{  $store.state.userinfo  }} -->
      <el-container style=" border: 1px solid #eee">
        <!--左侧导航 -->
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

          <!-- 导航 -->
          <el-menu default-active="/" :default-openeds="['1']" router background-color="#545c64" text-color="#fff">
            
            <el-menu-item index="/" style="background:#333;">
                <i class="el-icon-setting"></i>
                KIWI - 物料管理界面
            </el-menu-item>

              <!-- 下滑导航 -->
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>账号管理
              </template>
              <el-menu-item index="userlist">用户列表</el-menu-item>
              <el-menu-item index="useradd">账号管理</el-menu-item>
              <el-menu-item index="passwordedit">修改密码</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>物料管理
              </template>
              <el-menu-item index="materials">物料分类</el-menu-item>
              <el-menu-item index="materialslist">物料列表</el-menu-item>
              <el-menu-item index="materialsadd">物料增删</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-setting"></i>产品管理
              </template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>

        <!--右侧内容 -->
        <el-container>
          <!-- <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
          </el-header>
          <el-main>
            <el-table :data="tableData">
              <el-table-column prop="date" label="日期" width="140"></el-table-column>
              <el-table-column prop="name" label="姓名" width="120"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </el-main>-->

          <!-- router export -->
        <router-view>
        </router-view>
        
        </el-container>

    </el-container>
    </div>
  </div>
</template>

<script>
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
  methods: {}
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
  background-color: #545c64 !important;
}

html,
body,
#app,
.index {
    display: flex;
    flex: 1;
    height: 100%;
}

.el-container {
  height: 100% !important;
}

.top-text {
  text-align: center;
  padding: 40px 0px;
  background-color: #333;
}

</style>

