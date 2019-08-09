<template>
  <div id="admin">
    <el-container>
    <el-main>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="color:#4093ff; float: left; padding: 10px 0;"><i class="el-icon-user-solid"></i>管理员账号列表</span>
          <el-button style="float: right;" type="text" @click="handleAdd">添加</el-button>
        </div>
        <div class="text item">
          <!-- 表格 -->
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="username" label="账号" width="130"></el-table-column>
            <el-table-column prop="realname" label="姓名" width="130"></el-table-column>
            <!-- <el-table-column prop="sex" label="性别" width="100"></el-table-column> -->
            <!-- <el-table-column prop="idType" label="证件号" width="100"></el-table-column> -->
            <el-table-column prop="telphone" label="电话" ></el-table-column>
            <el-table-column prop="email" label="邮箱" ></el-table-column>
            <el-table-column prop="department" label="部门" ></el-table-column>
            <el-table-column prop="branch" label="分支" ></el-table-column>

            <el-table-column fixed="right" label="操作" >
              <template slot-scope="scope">
                <el-button class="el-icon-edit" @click="handleEdit(scope.row.id)" type="text" size="small">编辑</el-button>
                <el-button class="el-icon-delete" @click="handleDel(scope.row.id)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- <div class="block">
          <el-pagination layout="prev, pager, next" :total="100"></el-pagination>
        </div> -->
      </el-card>
    </el-main>
    </el-container>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex';

export default {
  data() {
    return {
      tableData:[]
    }
  },
  created(){
    //使用辅助函数 获取全局的getters
    this.getUserList().then(() => {
      this.tableData = this.Admin;
    })
  },
  methods:{
    ...mapActions({
      getUserList:'GET_USERLIST'
    }),
    handleAdd (id) {
      this.$router.push({path: '/useradd'})
        console.log('编辑' + id )
    },
  },
  computed:{
    ...mapGetters(['Admin']),
    ...mapState({ 
      userList: state => state.userList,
    })
  }
};
</script>


<style scoped>
.admin{
  width: 100%;
  height:100%;
}
.clearfix{
  height: 30px;
}
</style>