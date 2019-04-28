<template>
<<<<<<< HEAD
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
=======
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
>>>>>>> 120d68e7b464c9e3db84847e5c3631fc43d57896
