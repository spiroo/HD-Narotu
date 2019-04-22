<template>
  <div class="clearfix">
    <div class="showAside pull-left" @click="toggleClick">
      <i class="el-icon-menu"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "showAside",
  props: {
    toggleClick: {
      type: Function,
      default: null
    }
  }
};
</script>
