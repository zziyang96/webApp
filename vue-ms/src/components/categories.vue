<template>
  <div id="materials">
    <el-container>
      <el-main>
        <!-- <el-row :gutter="20">
          <el-col :span="6">
              <el-card :body-style="{ padding: '0px' }">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564120806071&di=8a30216790727a96713e9fda15b22430&imgtype=0&src=http%3A%2F%2Fwww.bhphotovideo.com%2Fimages%2Fimages2000x2000%2FApple_md388ll_a_Mac_mini_Desktop_Computer_897212.jpg" class="image">
                <div style="padding: 14px;">
                  种类，物资名称，物资数量，物资status
                  <span>{{ }}</span>
                  <span>{{ }}</span>
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">查看详细</el-button>
                    <el-button type="text" class="button">编辑</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :body-style="{ padding: '0px' }">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564120779824&di=0815ccef7c4fc0f0e3bf2dbfdcd22390&imgtype=0&src=http%3A%2F%2Fs1.sinaimg.cn%2Fmw690%2F006hiYymgy72nlVvc3Ac6" class="image">
                <div style="padding: 14px;">
                  种类，物资名称，物资数量，物资status
                  <span>{{ }}</span>
                  <span>{{ }}</span>
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">查看详细</el-button>
                    <el-button type="text" class="button">编辑</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :body-style="{ padding: '0px' }">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564120296593&di=257762161d643ac559f5b03db55e9c41&imgtype=0&src=http%3A%2F%2Fl.b2b168.com%2F2017%2F03%2F26%2F10%2F201703261000013935354.jpg" class="image">
                <div style="padding: 14px;">
                  种类，物资名称，物资数量，物资status
                  <span>{{ }}</span>
                  <span>{{ }}</span>
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">查看详细</el-button>
                    <el-button type="text" class="button">编辑</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6"><el-card :body-style="{ padding: '0px' }">
                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2731771878,2533998639&fm=27&gp=0.jpg" class="image">
                <div style="padding: 14px;">
                  种类，物资名称，物资数量，物资status
                  <span>{{ }}</span> 
                  <span>{{ }}</span>
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">查看详细</el-button>
                    <el-button type="text" class="button">编辑</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
        </el-row> -->
        
        <el-carousel :interval="4000" type="card" height="350px" style="margin-bottom:-25px;">
          <el-carousel-item v-for="item in 6" :key="item">
            <!-- 一下显示物料种类名字，种类包含的产品，数量，介绍 -->
            <h3 class="medium">{{ category }}</h3>
            <h3 class="medium">{{ productname }}</h3>
            <h3 class="medium">{{ quantity }}</h3>
            <h3 class="medium">{{ description }}</h3>
          </el-carousel-item>
        </el-carousel>
        
      </el-main>  

      <el-divider content-position="center"> 添加物资种类</el-divider>

      <el-footer>
        <!-- <el-row>
          <el-col > -->
            <!-- <header class="form_header">添加物资种类</header> -->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
              <el-form-item label="物资种类名称" prop="category" style="width:600px">
                  <el-input v-model="ruleForm.category" placeholder="请输入需添加的物料种类名称"></el-input>
              </el-form-item>
              
              <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')" style="background-color:#545c64; border:#545c64;">立即创建</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
              </el-form>
          <!-- </el-col>
        </el-row> -->
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  data() {
    return {
        ruleForm: {
          category: '',
        },
        rules: {
          category: [
            { required: true, message: '请输入物资种类', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      //表单提交
      submitForm(formName) {},
      //表单重置
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
  computed:{
    ...mapState({})
  }
};
</script>


<style scoped>

.materials{
  width: 100%;
  height: 100%;
}
.el-row {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
}  

.el-container{
  height: 100%;
}
.el-row {
  margin-bottom: 20px;
}
.el-row :last-child{
  margin-bottom: 3px;
}
.el-col {
  border-radius: 4px;
}
.image{
  width:254px;
  height: 200px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 150px;
  height: 150px;
  line-height: 150px;
  text-align: center;
}
.avatar {
  width: 150px;
  height: 150px;
  display: block;
}
.bottom, .clearfix{
  float: right;
}
.el-carousel__item h3 {
  color: whitesmoke;
  font-size: 14px;
  opacity: 1;
  line-height: 200px;
  margin: 0;
  
}
.el-carousel__item:nth-child(2n) {
  background-color: whitesmoke;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: whitesmoke;
}
</style>