<template>
  <div class="materialsadd">

    <!-- <el-main> -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm" >
        <el-form-item label="物资名称" prop="productname" style="width:400px;">
          <el-input v-model="ruleForm.productname" size="mini" placeholder="请输入物资名称"></el-input>
        </el-form-item>
        <el-form-item label="物资型号" prop="productmodel" style="width:400px;">
          <el-input v-model="ruleForm.productmodel" size="mini" placeholder="请输入物资型号"></el-input>
        </el-form-item>
        <el-form-item label="物资详情" prop="description" style="width:500px;">
          <el-input v-model="ruleForm.description" size="mini" placeholder="请输入物资详情"></el-input>
        </el-form-item>
        <el-form-item label="物资种类" prop="category">
          <el-select v-model="ruleForm.category" size="mini" placeholder="请选择物资种类">
          <el-option label="无人机" value="无人机"></el-option>
          <el-option label="电脑" value="电脑"></el-option>
          <el-option label="摄像头" value="摄像头"></el-option>
          <el-option label="无人机电池" value="无人机电池"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="厂商/供应商" prop="manufacturer" style="width:400px;">
          <el-input v-model="ruleForm.manufacturer" size="mini" placeholder="请输入厂商/供应商名称"></el-input>
        </el-form-item>
        <el-form-item label="上传物资图片(optional)" prop="productimg">
          <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="uploadImg" :before-upload="beforeImgUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="录入数量" required prop="recordnum">
            <el-input-number v-model="ruleForm.recordnum" @change="handleChange" :min="1" :max="100" size="small" label="描述文字"></el-input-number>
        </el-form-item>
        <el-form-item label="录入人姓名" prop="recorder" style="width:300px;">
          <el-input v-model="ruleForm.recorder" size="mini" placeholder="请输入录入人姓名"></el-input>
        </el-form-item>
        <el-form-item label="录入人ID" prop="idType" style="width:300px;">
          <el-input v-model="ruleForm.idType" size="mini" placeholder="请输入录入人Id"></el-input>
        </el-form-item>
        <el-form-item label="录入时间" required clearable prop="timerecord">
          <el-date-picker v-model="ruleForm.timerecord" type="datetime" placeholder="选择录入日期时间" size="mini" align="right" :picker-options="pickerOptions"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="物资状态" prop="staus">
            <el-select v-model="ruleForm.category" size="mini" placeholder="请更新物资状态">
            <el-option label="采购中" value="采购中"></el-option>
            <el-option label="库存满" value="库存满"></el-option>
            <!-- <el-option label="摄像头" value="摄像头"></el-option> -->
            </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    <!-- </el-main> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      ruleForm: {
        productname: "",
        productmodel:'',
        description: "",
        category: '',
        recorder:'',
        idType:'',
        imageUrl: '',
        productimg:'',
        timerecord: "",
        recordnum:1,
        manufacturer:''
      },
      // 表单规则
      rules: {
        productname: [
            { required: true, message: "请输入物资名称", trigger: "blur" },
        ],
        productmodel: [
            { required: true, message: "请输入物资型号", trigger: "blur" },
        ],
        description: [
            { required: true, message: "请输入物资详情", trigger: "blur" }
        ],
        category: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        recorder: [
            { required: true, message: "请输入录入人姓名", trigger: "blur" },
        ],
        idType: [
            { required: true, message: "请输入录入人ID", trigger: "blur" },
        ],
        manufacturer: [
            { required: true, message: "请输入供应商名称", trigger: "blur" },
        ],
        timerecord: [
            { type: "datetime", required: true, message: "请选择日期时间", trigger: "change"}
        ]
      },
      // 时间选择
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value2: ""
    };
  },
  methods: {
    // 数量增减
    handleChange(value) {
        console.log(value);
    },
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
    //提交验证
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  computed: {
    ...mapState({ })
  }
};
</script>


<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.materialsadd {
  width: 100%;
  height: 100%;
}
.hello {
  font-size: 16px;
}
.el-main{
    height: 100%;
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
/* .demo-ruleForm{
    background-color: #fff;
} */
/* .el-form .el-form-item{
    margin-top: 8px;
    margin-bottom: 8px;
} */
</style>