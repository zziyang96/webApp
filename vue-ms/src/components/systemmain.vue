<template>
    <div id="systemmain">
			<el-container id="main">
				<el-main>
					<el-card class="box-card ">
					  <div slot="header " class="clearfix ">
					    <span>系统信息</span>
					  </div>
					  <div class="text item ">
                        <p><el-alert title="产品添加成功 " type="success " show-icon></el-alert></p>
					    <p><el-alert title="请补充物资 " type="warning " show-icon></el-alert></p>
                        <p><el-alert title="请检查库存 " type="warning " show-icon></el-alert></p>
					    <p><el-alert title="请添加物资的详细信息 " type="warning " show-icon></el-alert></p>
					  </div>
					  <el-row :gutter="20">
						  <el-col :span="12">
						  	<el-card class="box-card ">
							  <div slot="header " class="clearfix ">
							    <span>物资库存详细</span>
							  </div>
							  <div class="text item ">
                                  <el-table
                                    :data="tableData1"
                                    style="width: 100%">
                                    <el-table-column
                                        prop="model"
                                        label="型号"
                                        width="130">
                                    </el-table-column>
                                    <el-table-column
                                        prop="product"
                                        label="产品"
                                        width="130">
                                    </el-table-column>
                                    <el-table-column
                                        prop="quantity"
                                        label="库存"
                                        width="130">
                                    </el-table-column>
                                    <el-table-column
                                        prop="status"
                                        label="状态"
                                        width="130">
                                    </el-table-column>
                                  </el-table>
							  </div>
							  </el-card>	
						  </el-col>
						  <el-col :span="12">
						  	<el-card class="box-card ">
							  <div slot="header " class="clearfix ">
							    <span>缺货物资详细</span>
							  </div>
							  <div class="text item ">
                                  <el-table
                                    :data="tableData2"
                                    style="width: 100%">
                                    <el-table-column
                                        prop="model"
                                        label="型号"
                                        width="130">
                                    </el-table-column>
                                    <el-table-column
                                        prop="product"
                                        label="产品"
                                        width="130">
                                    </el-table-column>
                                    <el-table-column
                                        prop="quantity"
                                        label="库存"
                                        width="130">
                                    </el-table-column>
                                    <el-table-column
                                        prop="status"
                                        label="状态"
                                        width="130">
                                    </el-table-column>
                                  </el-table>
							  </div>
							</el-card>	
						  </el-col>
						</el-row>
					</el-card>
				</el-main>
				<el-footer>
					&copy; 2019奇志科技
				</el-footer>
			</el-container>
		</div>

</template>

<script>
export default {
    data() {
         return{
            tableData1: [{
                model:'111',
                product: '无人机型号1',
                quantity: '20',
                status:'有货'
            }, {
                model:'112',
                product: '无人机型号2',
                quantity: '0',
                status:'采购中'
            }, {
                model:'221',
                product: '无人机机翼',
                quantity: '10',
                status:'有货'
            }, {
                model:'331',
                product: '无人机摄像头',
                quantity: '0',
                status:'采购中'
            }],
            tableData2: [{
                model:'213',
                product: '电脑显示器',
                quantity: '20',
                status:'有货'
            }, {
                model:'643',
                product: '键盘鼠标',
                quantity: '1',
                status:'请补货'
            }, {
                model:'234',
                product: '苹果mini',
                quantity: '15',
                status:'有货'
            }, {
                model:'743',
                product: '电脑主机',
                quantity: '2',
                status:'请补货'
            }]
        }
    }
}
</script>

<style scoped>
.main{
    width:100%;
    height:100%;
}
.systemmain{
  width: 100%;
  height: 100%;
}
/* .text {
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
  } */
</style>