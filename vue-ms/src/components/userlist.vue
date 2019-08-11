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
            <el-table-column prop="idType" label="证件号" width="140"></el-table-column>
            <el-table-column prop="telphone" label="电话" ></el-table-column>
            <el-table-column prop="email" label="邮箱" ></el-table-column>
            <el-table-column prop="department" label="部门" ></el-table-column>
            <el-table-column prop="branch" label="分支" ></el-table-column>

            <el-table-column fixed="right" label="操作" >
              <template slot-scope="scope">
                <el-button class="el-icon-edit" @click="handleEdit" type="text" size="small">编辑</el-button>
                <el-button class="el-icon-delete" @click="handleDelete(scope.row.id)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

          <el-row>
          <el-col :span="24">
            <div class="pagination">
              <el-pagination
                background
                :page-sizes="paginations.pageSizes"
                :layout="paginations.layout"
                :total="pageTotal"
                :current-page='paginations.pageIndex'
                @current-change='handleCurrentChange'
                @size-change='handleSizeChange'>
              </el-pagination>
            </div>
          </el-col>
        </el-row>
        
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
      paginations: {
        total:0,
        pageIndex: 1,  // 当前位于哪页
        pageSize: 6,   // 1页显示多少条
        pageSizes: [5, 10, 15, 20],  //每页显示多少条
        layout: "total, sizes, prev, pager, next, jumper"   // 翻页属性
      },
    };
  },
  
  props:{
    pageTotal:Number
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
    handleDelete (formName) {
      console.log(id)
      const self = this;
      const userInfo = JSON.parse(localStorage.getItem('userinfo'));
      let formData = {
        id: userInfo["id"],
        username: self.infoForm.username,
        realname: self.infoForm.realname,
        email: self.infoForm.email,
        telphone: self.infoForm.telphone,
        department: self.infoForm.department,
        idType: self.infoForm.idType,
        branch: self.infoForm.branch,
        sex: self.infoForm.sex
      };
        self.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios
            .post('/api/deleteUser', formData).then(function (response) {
              console.log(response);
            }).then (function (error) {
              console.log(error);
            })
          }else {
            console.log('error !!');
            return false
          }
        });
      },

     // 每页多少条切换
    handleSizeChange(pageSize) {
        this.paginations.pageSize = pageSize;
        this.getUserList();
    },
    // 上下分页
    handleCurrentChange(page) {
        this.paginations.pageIndex = page;
        this.getUserList({page, pageSize});
    }
  },
  computed: {
    ...mapState({
      userList: state => state.userList,
    })
  }
};
</script>

 
<style scoped>

.userlist {
  width: 100%;
  height: 100%;
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
.pagination{
  text-align: right;
  padding: 20px 18px;
}
</style>