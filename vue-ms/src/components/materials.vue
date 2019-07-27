<template>
  <div class="materials">
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
        
        <el-carousel :interval="4000" type="card" height="300px" style="margin-bottom:-25px;">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{  }}</h3>
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
              <el-form-item label="物资种类图片" prop="categoryimage">
                <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="uploadImg" :before-upload="beforeImgUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" v-model="ruleForm.categoryimage" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
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
          imageUrl: '',
          categoryimage:'',
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
      //照片上传
      uploadImg(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeImgUpload(file) {
        const isJPG = file.type === "image/jpeg";
        const isJPEG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/jpeg';
        const isLt3M = file.size / 1024 / 1024 < 3;

        if (!isJPG) {
          this.$message.error("上传头像图片只能是 JPG 格式!");
        }
        if (!isPNG) {
          this.$message.error("上传头像图片只能是 PNG 格式!");
        }
        if (!isJEPG) {
          this.$message.error("上传头像图片只能是 JEPG 格式!");
        }
        if (!isLt3M) {
          this.$message.error("上传头像图片大小不能超过 3MB!");
        }
        return isJEPG && isPNG && isJPG && isLt3M;
      },
      //表单提交
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
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


<style>

.materials{
  width: 100%;
}
.hello{
  font-size: 16px;
}
.el-row {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
}  
/*
.el-col {
    border-radius: 4px;
}
.form_header{
    text-align: center;
    margin-bottom: 10px;
} */
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