<template>
  <div class="materialslist">

    <el-main>
        list
    </el-main>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  data() {
    return {}
  },
  computed:{
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
.materialslist{
  width: 100%;
  height: 100%;
}
.hello{
  font-size: 16px;
}
</style>