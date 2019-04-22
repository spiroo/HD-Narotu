<template>
  <div class="container">
    <tags />
    <div class="contents">
      <transition name="fade-transform" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Tags from './Tags.vue'
export default {
  components:{
    Tags
  }
}

</script>
