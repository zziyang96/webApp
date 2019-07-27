<template>
  <div class="userlist">

    <el-main>
      <!-- 账号列表 -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="color:#4093ff; float: left;padding:10px 1px;"><i class="el-icon-user-solid"></i>用户账号列表</span>
          <el-button style="float: right;" type="text" @click="handleAdd">添加</el-button>
        </div>
        <div class="text item">
          <!-- 表格 -->
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="username" label="账号" width="100"></el-table-column>
            <el-table-column prop="realname" label="姓名" width="100"></el-table-column>
            <el-table-column prop="sex" label="性别" width="100"></el-table-column>
            <el-table-column prop="idType" label="证件号" width="100"></el-table-column>
            <el-table-column prop="telphone" label="电话" width="110"></el-table-column>
            <el-table-column prop="email" label="邮箱" width="200"></el-table-column>
            <el-table-column prop="department" label="部门" width="110"></el-table-column>
            <el-table-column prop="branch" label="分支" width="70"></el-table-column>

            <el-table-column fixed="right" label="操作" width="150">
              <template slot-scope="scope">
                <el-button class="el-icon-edit" @click="handleEdit" type="text" size="small">编辑</el-button>
                <el-button class="el-icon-delete" @click="handleDel(scope.row.id)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="block">
          <el-pagination layout="prev, pager, next" :total="100"></el-pagination>
        </div>
      </el-card>
    </el-main>
  </div>
</template>

<script>
// import 辅助函数
import {mapState, mapActions} from 'vuex';

export default {
  data() {
    return {
      tableData: [],
      pagesize:9,
      currentPage:1
    };
  },
  
  created() {
    this.$store.dispatch('GET_USERLIST').then(() => {
      // console.log(this.$store.state.userList)
      // 把全局的 userlist 赋值给 table
      this.tableData = this.userList;

    })
    // this.GET_USERLIST().then (() => {
    //     this.tableData = this.userList;
    // });
  },

  methods: {
    ...mapActions({
        getUserList: 'GET_USERLIST'
    }),
    handleAdd (id) {
      this.$router.push({path: '/useradd'})
        console.log('编辑' + id )
    },
    handleEdit (id) {
      this.$router.push({path: '/useredit'})
        console.log('编辑' + id )
    },
    handleDel (id) {
        console.log('删除' + id )
    },
  },
  computed: {
      ...mapState({
          userList: state => state.userList,
      })
  }
};
</script>


<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  width: 100%;
}
/* .userlist {
  width: 100%;
  height: 100%;
} */
.username{
  font-size: 16px;
  color: #4093ff;
}
.hello{
  font-size: 16px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.el-table {
  margin-top: -10px;
  margin-bottom: -10px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
/* .clearfix{
  background-color: 
} */
.el-card__header{
  background-color:#545c64;
}
.el-main{
  height: 100%;
}
.el-card__body{
  padding: 0;
}
.el-main .box-card{
  border: 1px  grey;
  border-radius: 4px;
  height: 100%;
}
 .el-pagination{
  float: right;
}
</style>