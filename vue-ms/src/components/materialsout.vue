<template>
  <div class="materialsout">
    <el-container>
    <el-main>
      <!-- <el-row :gutter="">
        <el-col :span="12"> -->
          <p class="title"> 物资提出登记</p>
          <el-form :model="materialForm" :rules="rules" ref="materialForm" label-width="120px" class="demo-materialForm" >
            <el-form-item label="物资名称" prop="productname" style="width:400px;margin-top:-5px;margin-bottom:15px;">
              <el-input v-model="materialForm.productname" size="mini" placeholder="请输入物资名称"></el-input>
            </el-form-item>
            <el-form-item label="物资型号" prop="productmodel" style="width:400px;margin-top:-5px;margin-bottom:15px;">
              <el-input v-model="materialForm.productmodel" size="mini" placeholder="请输入物资型号"></el-input>
            </el-form-item>
            <el-form-item label="物资详情" prop="description" style="width:400px;margin-top:5px;margin-bottom:15px;">
              <el-input v-model="materialForm.description" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入物资详情"></el-input>
            </el-form-item>
            <el-form-item label="物资种类" prop="category">
              <el-select v-model="materialForm.category" size="mini" placeholder="请选择物资种类" style="margin-top:-5px;">
              <el-option label="无人机" value="无人机"></el-option>
              <el-option label="电脑" value="电脑"></el-option>
              <el-option label="摄像头" value="摄像头"></el-option>
              <el-option label="无人机电池" value="无人机电池"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="厂商/供应商" prop="manufacturer" style="width:400px;margin-top:-5px;margin-bottom:15px;">
              <el-input v-model="materialForm.manufacturer" size="mini" placeholder="请输入厂商/供应商名称"></el-input>
            </el-form-item>
            
            <el-form-item label="物资提出数量" required prop="quantity" style="margin-top:5px;margin-bottom:15px;">
                <el-input-number v-model="materialForm.quantity" @change="handleChange" :min="1" :max="1" size="small" label="描述文字"></el-input-number>
            </el-form-item>
            <el-form-item label="提出人姓名" prop="recorder" style="width:300px;margin-top:-5px;margin-bottom:15px;">
              <el-input v-model="materialForm.recorder" size="mini" placeholder="请输入提出人姓名"></el-input>
            </el-form-item>
            <el-form-item label="物资提出时间" required clearable prop="time_out" style="width:300px;margin-top:-5px;margin-bottom:15px;">
              <el-date-picker v-model="materialForm.time_out" type="datetime" placeholder="选择提出日期时间" size="mini" align="right" :picker-options="pickerOptions"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="物资状态" prop="staus" style="width:300px;margin-top:-5px;margin-bottom:15px;">
                <el-select v-model="materialForm.category" size="mini" placeholder="请更新物资状态">
                <el-option label="已录入" value="已录入"></el-option>
                <el-option label="已借出" value="已借出"></el-option>
                <el-option label="采购中" value="采购中"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('materialForm')" style="background-color:#545c64; border:#545c64;">立即提交</el-button>
              <el-button @click="resetForm('materialForm')">重置</el-button>
            </el-form-item>
          </el-form>
        <!-- </el-col>

      </el-row> -->
    </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      materialForm: {
        productname: "",
        productmodel:'',
        description: "",
        category: '',
        recorder:'',
        productimg:'',
        time_in: '',
        time_out:'',
        quantity:1,
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
        manufacturer: [
            { required: true, message: "请输入供应商名称", trigger: "blur" },
        ],
        
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
    };
  },
  methods: {
    // 数量增减
    handleChange(value) {
        console.log(value);
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


<style scoped>
.materialsout {
  width: 100%;
  height: 100%;
}
.el-main{
  height: 100%;
  margin-top:-5px;
}

.title{
  margin-bottom:10px; 
  font-size: 20px; 
  margin:20px 150px;

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

/* .el-form .el-form-item{
    margin-top: 8px;
    margin-bottom: 8px;
} */
</style>