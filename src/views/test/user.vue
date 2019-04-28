<template>
  <div class="test">
    <!-- 用户信息表格 -->
    <el-table :data="testData" stripe style="width: 100%">
      <el-table-column type="index" label="序号" width="180"></el-table-column>
      <el-table-column prop="name" label="名字"></el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="website" label="网站"></el-table-column>
      <el-table-column label="地址">
        <template slot-scope="scope">
          <el-tag>
            {{ scope.row.address.city }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="公司">
        <template slot-scope="scope">
          <el-tag>
            {{ scope.row.company.name }}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[3, 5, 10, 20]"
      :page-size.sync="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="dataCount">
    </el-pagination>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "userInf",
  data() {
    return {
      usetTable: [],
      page: 1,
      pageSize: 3,
      currentPage: 1
    };
  },
  computed: {
    ...mapGetters(["testData", "dataCount"])
  },
  methods: {
    getUsers() {
      const params = {};
      params._page = this.page;
      params._limit = this.pageSize;
      // fetchUser(params).then(response => {
      //   this.usetTable = response;
      //   console.log(response);
      // });
      this.$store.dispatch("getTestData", params);
    },
    handleCurrentChange() {
      this.page = this.currentPage;
      this.getUsers();
    },
    handleSizeChange() {
      this.getUsers();
    }
  },
  mounted() {
    this.getUsers();
  }
};
</script>
<style lang="scss" scoped>
.fl {
  float: left;
}
.fr {
  float: right;
}
.cb {
  clear: both;
}
</style>
