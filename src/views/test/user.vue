<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
  <el-table-column 
    label="序号"
    width="180">
      <template slot-scope="scope">
        {{ `${scope.$index + 1 }` }}
      </template>
  </el-table-column>
  <el-table-column
    prop="name"
    label="姓名"
    width="180">
  </el-table-column>
  <el-table-column
    prop="phone"
    label="电话">
  </el-table-column>
  <el-table-column
    prop="username"
    label="用户名">
  </el-table-column>
  <el-table-column
    prop="website"
    label="网址">
  </el-table-column>
   <el-table-column
    prop="email"
    label="电子邮箱">
  </el-table-column>
   <el-table-column
    prop="address"
    label="地址">
     <template slot-scope="scope">
        {{ `${scope.row.address.city } ${scope.row.address.street}` }}
      </template>
  </el-table-column>
   <el-table-column
    prop="company"
    label="公司">
     <template slot-scope="scope">
        {{ `${scope.row.company.name }` }}
      </template>
  </el-table-column>
</el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="page"
      :page-sizes="[2, 5, 10, 15]"
      :page-size="limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableCount">
    </el-pagination>
 
  </div>
</template>
<script>

import { fetchTestUser } from "@/api/test";
import { mapGetters } from "vuex";
export default {
  name: "sph",
  data() {
    return {
      tableData:[],
      page: 1,
      limit: 5
    }
  },
  computed: {
    ...mapGetters(['tableCount'])
  },
  methods: { 
    handleSizeChange(val) {
     this.limit = val;
     this.getUser()
    },
    handleCurrentChange(currentPage) {
      this.page = currentPage;
      this.getUser()
      // console.log(currentPage)
    },
    getUser() {
      const params = { 
        _page: this.page,
        _limit: this.limit
      };
      fetchTestUser(params).then(response => {
        console.log('resonse = ', response);
        this.tableData = response;
      });
    }
  },
  mounted() {
    this.getUser();
  },
}
</script>
