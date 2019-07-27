<template>
  <div class="admin">

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

.admin{
  width: 100%;
  height:100%;
}
.hello{
  font-size: 16px;
}
</style>