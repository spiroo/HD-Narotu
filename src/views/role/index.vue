<template>
  <div class="main">
    <el-button class="add">+新增</el-button>
    <el-table
      :data="list"
      border
    >
      <el-table-column
        label="序号"
        width="180">
        <template slot-scope="scope">
          {{ `${scope.$index + 1 }` }}
        </template>
      </el-table-column>
      <el-table-column
        prop="roleName"
        label="角色"
        width="180">
      </el-table-column>
      <el-table-column
        prop=""
        label="是否启用">
        启用
      </el-table-column>
      <el-table-column
        prop=""
        label="操作">
        <template slot-scope="scope">
          <router-link :to="`/roleDetail/${scope.row.id}`">查看权限</router-link>
          设置
        </template>
      </el-table-column>
      <el-table-column
        prop="updateTime"
        label="创建时间"
        width="180">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[2, 5, 10, 15]"
      :page-size="limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total=" count">
    </el-pagination>
  </div>
</template>

<script>
import { fetchRoleList } from '@/api/role';
import { mapGetters } from 'vuex'

export default {
  name: 'role',
  data() {
    return {
      list: [],
      page: 1,
      limit: 2,
      count:0
    };
  },
  computed: {
    ...mapGetters(['roleList'])
  },
  mounted() {
    this.getRoleList();
  },
  methods: {
    handleSizeChange (sizeChange) {
      this.limit = sizeChange,
      this.getRoleList()  
    },
    handleCurrentChange (currentpage) {
      this.page =currentpage;
      this.getRoleList()

    },
    getRoleList() {
      // this.$store.dispatch('getRoleList');
      const params = {
        // formData: {},
        pageData: {
         currentPage: this.page,
         pageSize: this.limit
        }
      };
      fetchRoleList(params).then(response => {
        console.log('resonse = ', response);
        this.list = response.data.list;
        this.count = response.data.total;

      });
    }
  }
}
</script>

<style>

</style>

