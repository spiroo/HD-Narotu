<template>
  <!-- 打开标签的容器 -->
  <div class="tags">
    <ul>
      <li
        class="tags-li"
        v-for="(item,index) in tagsList"
        :key="index"
        :class="{'active': isActive(item.path)}"
      >
        <router-link :to="item.path" class="tags-li-title">{{item.title}}</router-link>
        <span class="tags-li-icon" @click="closeTags(index)">
          <i class="el-icon-close"></i>
        </span>
      </li>
    </ul>
    <div class="tags-close-box">
      <el-dropdown @command="handleCommand">
        <el-button size="mini" type="primary">
          标签选项
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu size="small" slot="dropdown">
          <el-dropdown-item command="closeOther">关闭其他</el-dropdown-item>
          <!-- <el-dropdown-item command="all">关闭所有</el-dropdown-item> -->
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { messages } from "@/utils/common.js";
export default {
  created() {
    //判断标签里面是否有值 有的话直接加载
    if (this.tagsList.length == 0) {
      this.setTags(this.$route);
    }
  },
  computed: {
    //computed 方法里面没有set方法因此不能使用mapState,需要重新定义set方法
    tagsList: {
      get: function() {
        return this.$store.state.tagsList;
      },
      set: function(newValue) {
        this.$store.commit("TAGES_LIST", newValue);
        // this.$store.state.tagsList = newValue;
      }
    }
  },
  watch: {
    //监听路由变化
    $route(newValue, oldValue) {
      this.setTags(newValue);
    }
  },
  methods: {
    //选中的高亮
    isActive(path) {
      return path === this.$route.fullPath;
    },
    handleCommand(command) {
      if (command == "closeOther") {
        // 关闭其他标签
        const curItem = this.tagsList.filter(item => {
          return item.path === this.$route.fullPath;
        });
        this.tagsList = curItem;
      }
    },
    //添加标签
    setTags(route) {
      let isIn = this.tagsList.some(item => {
        //判断标签是否存在
        return item.path === route.fullPath;
      });
      //不存在
      if (!isIn) {
        // 判断当前的标签个数
        if (this.tagsList.length >= 10) {
          messages("warning", "当标签大于10个，请关闭后再打开");
        } else {
          this.tagsList.push({
            title: route.meta.title,
            path: route.fullPath,
            name: route.name
          });
          //存到vuex
          this.$store.commit("TAGES_LIST", this.tagsList);
        }
      }
    },
    closeTags(index) {
      console.log(this.tagsList.length);
      if (this.tagsList.length == 1) {
        messages("warning", "不可全都关闭");
      } else {
        //删除当前
        let tags = this.tagsList.splice(index, 1);
        this.$store.commit("TAGES_LIST", this.tagsList);
      }
    }
  }
};

</script>
