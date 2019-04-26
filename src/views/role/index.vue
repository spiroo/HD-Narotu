<template>
<div class="main">
  <el-button class="add">+新增</el-button>
  <el-table
    :data="list"
    border
    style="width: 60%"
  >
  <el-table-column
    prop="id"
    label="序号"
    width="180">
  </el-table-column>
  <el-table-column
    prop="isDefault"
    label="角色"
    width="180">
  </el-table-column>
  <el-table-column
    prop="isPublish"
    label="是否启用">
  </el-table-column>
  <el-table-column
    prop="roleName"
    label="操作">
  </el-table-column>
  <el-table-column
  prop="updateTime"
    label="创建时间">
  </el-table-column>
  
  </el-table>
</div>
 
</template>

<script>
import { fetchRoleList } from '@/api/role';
import { mapGetters } from 'vuex'

export default {
  name: 'role',
  data() {
    return {
      list: []
    };
  },
  computed: {
    ...mapGetters(['roleList'])
  },
  mounted() {
    this.getRoleList();
  },
  methods: {
    getRoleList() {
      // this.$store.dispatch('getRoleList');
      const params = {
        // formData: {},
        pageData: {
          // currentPage: 0,
          pageSize: 20
        }
      };
      fetchRoleList(params).then(response => {
        console.log('resonse = ', response);
        this.list = response.data.list;
      });
    }
  }
}
</script>
