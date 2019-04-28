<template>
  <div class="main">
      <label class='user'>
        未登录用户
      </label>
      <div class="top">    
        前台权限
      </div>
   
      <div class="nav">
         <label class="home">
            首页：
          </label>
        <ul>
          <li>中央精神&nbsp;&nbsp;</li>
          <li>航天聚焦&nbsp;&nbsp;</li>
          <li>工作动态&nbsp;&nbsp;</li>
          <li>老年大学&nbsp;&nbsp;</li>
          <li>服务电话</li>
        </ul>
      </div>
         
        <span>
         新手导航
        </span>
   
      <div class="detail">
        <label>后台权限</label>
      </div>
      <div class="table-main">
        <el-table
          :data="list"
          border
        >
        <el-table-column
          prop="moduleName"
          label="角色"
        ></el-table-column>        
        </el-table>
          <el-pagination
            layout="prev, pager, next"
            :total="10">
          </el-pagination>
        
      </div>
  </div>
</template>

<script>
import { fetchDetailList } from '@/api/detail';
import { mapGetters } from 'vuex'

export default {
  name: 'detail',
  data() {
    return {
      list: [],
      id: undefined
    };
  },
  computed: {
    ...mapGetters(['detailList'])
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getDetailList();
  },
  methods: {
    getDetailList() {
      // this.$store.dispatch('getRoleList');
      const params = {
        formData: {
          id: this.id
        },
        pageData: {
          currentPage: 0,
          pageSize: 20
        }
      };
      console.log(params.formData.id)
      fetchDetailList(params).then(response => {
        console.log('resonse = ', response);
        this.list = response.data.list;
      });
    }
  }
}
</script>

<style>
  .user {
    position: relative;
    float: left;
  }
  .top {
    position: relative;
    float: left;
    margin-top:20px;
    margin-left:-50px;
  }
  .home {
    position: relative;
    top:20px;
    float: left;
  }
  li {
    float: left;
    list-style: none;
    text-decoration: none;
    text-align: center;
  }

</style>
