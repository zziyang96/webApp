<template>
  <div class="materialslist">
    <el-container>
    <el-main>
      <el-card class="box-card1">
        <div slot="header" class="clearfix">
          <span style="color:#4093ff;float: left;padding:10px 1px;"><i class="el-icon-menu"></i>物料列表</span>
          <el-button style="float: right;" type="text" @click="handleAdd">添加</el-button>
          
        </div>
        <div style="margin-top: 15px;">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="型号" value="型号"></el-option>
              <el-option label="生厂商" value="生厂商"></el-option>
              <el-option label="物料名称" value="物料名称"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div class="text item">
          <!-- 表格 -->
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="productname" label="物资名称" width="110"></el-table-column>
            <el-table-column prop="productmodel" label="物资型号" width="130"></el-table-column>
            <el-table-column prop="category" label="物资种类" ></el-table-column>
            <el-table-column prop="manufacturer" label="厂商/供应商" ></el-table-column>
            <el-table-column prop="quantity" label="数量" ></el-table-column>
            <el-table-column prop="status" label="状态" ></el-table-column>
            <el-table-column prop="update_time" label="更新时间" ></el-table-column>
            <el-table-column prop="description" label="物资详情" ></el-table-column>

            <el-table-column fixed="right" label="操作" width="120">
              <template slot-scope="scope">
                <el-button class="el-icon-edit" @click="handleEdit" type="text" size="small">编辑</el-button>
                <el-button class="el-icon-delete" @click="handleDel(scope.row.id)" type="text" size="small">删除</el-button>
              </template>  
            </el-table-column>
          </el-table>
        </div>
        <div class="block">
          <el-pagination layout="prev, pager, next" :total="70"></el-pagination>
        </div>
      </el-card>
  </el-main>
  </el-container>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  data() {
    return {
      pagesize:9,
      currentPage:1,
      select: '',
      tableData: [{}]
    }
  },
  created() {
    this.$store.dispatch('GET_PRODUCTLIST').then(() => {
      // console.log(this.$store.state.productList)
      // 把全局的 productList 赋值给 table
      this.tableData = this.productList;

    })
    // this.GET_PRODUCTLIST().then (() => {
    //     this.tableData = this.productList;
    // });
  },
  methods:{
    handleAdd (id) {
      this.$router.push({path: '/materialsadd'})
        console.log('编辑' + id )
    }
  },
  computed:{
    ...mapState({ 
      productList: state => state.productList,
    })
  }
};
</script>


<style scoped>
.materialslist{
  width: 100%;
  height: 100%;
}
.el-pagination{
  float: right;
}
.clearfix{
  height: 30px;
}
</style>