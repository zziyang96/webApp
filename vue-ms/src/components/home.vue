<template>
  <div class="home">

    <el-main >
      <el-card class="box-card1">
        <div slot="header" class="clearfix">
          <span style="color:#4093ff;"><i class="el-icon-user-solid"></i>用户信息卡</span>
          <el-button style="float: right; padding: 3px 0" type="text">查看</el-button>
        </div>


        <el-row :gutter="30">
          <el-col :span="12">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-col>

          <el-col :span="12">

            <div class="text item">
              用户账号： {{ userinfo.username }}
            </div>
            <div class="text item">
              真实姓名： {{ userinfo.realname }}
            </div>
            <div class="text item">
              用户密码： {{ userinfo.password }}
            </div>
            <div class="text item">
              性别： {{ userinfo.sex }}
            </div>
            <div class="text item">
              证件号码： {{ userinfo.idType }}
            </div>
            <div class="text item">
              手机： {{ userinfo.telphone }}
            </div>
            <div class="text item">
              邮箱： {{ userinfo.email }}
            </div>
            <div class="text item">
              部门名称： {{ userinfo.department }}
            </div>
            <div class="text item">
              分支： {{ userinfo.branch }}
            </div>
          </el-col>
        </el-row>

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
      imageUrl:''
    };
  },
   methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isJPEG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/jpeg';
        const isLt3M = file.size / 1024 / 1024 < 3;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isPNG) {
          this.$message.error("上传头像图片只能是 PNG 格式!");
        }
        if (!isJEPG) {
          this.$message.error("上传头像图片只能是 JEPG 格式!");
        }
        if (!isLt3M) {
          this.$message.error('上传头像图片大小不能超过 3MB!');
        }
        return isJEPG && isPNG && isJPG && isLt3M;      
      }
    },
  computed:{
    //用户名
    // username() {
    //   return this.$store.state.userinfo.username
    // },

    //辅助函数 全局获取state数据 
    ...mapState({
      userinfo: state => state.userinfo
    })

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
.hello{
  font-size: 16px;
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
  width: 600px;
}

/* head image */
.avatar-uploader{
  margin-left: 25px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.el-col, .el-col-12{
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>