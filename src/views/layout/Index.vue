<template>
  <div class="wrapper">
    <Aside class="aside-container"/>
    <div class="main-container" :class="isCollapse==true?'container_collapse':''">
      <Header/>
      <Main/>
    </div>
  </div>
</template>

<script>
import Aside from "./components/Aside.vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import { mapState } from "vuex";
export default {
  name: "Layout",
  components: {
    Aside,
    Header,
    Main
  },
  computed: {
    ...mapState(["isCollapse"])
  }
};

</script>
