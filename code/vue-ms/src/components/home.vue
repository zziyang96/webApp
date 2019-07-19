<template>
  <div class="home">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span class="username">
        <!-- 从state提取用户名 -->
        <!-- {{$store.state.userinfo.username}} -->
        <!-- {{ username }} -->
      </span>
    </el-header>

    <el-main>
      <el-card class="box-card1">
        <div slot="header" class="clearfix">
          <span>用户信息卡</span>
          <el-button style="float: right; padding: 3px 0" type="text">查看</el-button>
        </div>
        <!-- <div class="text item">
          用户账号： {{ userinfo.username }}
        </div>
        <div class="text item">
          用户密码： {{ userinfo.password }}
        </div>
        <div class="text item">
          真实姓名： {{ userinfo.realname }}
        </div>
        <div class="text item">
          证件号码： {{ userinfo.idType }}
        </div> -->
      </el-card>  
    </el-main>

  </div>
</template>

<script>

//引入mapstate
import {mapState} from 'vuex';

export default {
  data() {
    return {
    }
  },
  computed:{
    //用户名
    // username() {
    //   return this.$store.state.userinfo.username
    // },

    //辅助函数 全局获取state数据
    // ...mapState({
    //   userinfo: state => state.userinfo,
    //   username: state => state.userinfo.username
    // })

    //获取用户信息
    // userinfo() {
    //   return this.$store.state.userinfo
    // }
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.home {
  width: 100%;
}
.username{
  font-size: 16px;
  color: #4093ff;
}

.text {
  font-size: 14px;
  }

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.box-card1 {
  width: 500px;
}
</style>