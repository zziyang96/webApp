<template>
  <div class="useradd">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span class="username">奇志</span>
      <!-- <span class="username"> {{ username }}</span> -->

    </el-header>

    <el-main>
        添加账号
    </el-main>
    
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data(){
    return 
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
.useradd{
    width: 100%;
}
.username{
  font-size: 16px;
  color: #4093ff;
}
</style>