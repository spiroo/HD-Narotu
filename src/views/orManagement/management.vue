<template>
  <div class="management">
    <div class="add">
      <el-button @click.native.prevent="deleteRow(scope.$index, list)" type="text" size="small">添加</el-button>
    </div>
<<<<<<< HEAD
    <el-table
      :data="list"
      style="width: 100%;"
      max-height="100%"
      :header-cell-style="getRowClass"
    >
      <el-table-column align="center" fixed type="index" label="序号" width="100"></el-table-column>
=======
    <el-table :data="list" style="width: 100%;" max-height="100%" :header-cell-style="getRowClass">
      <el-table-column align="center" type="index" label="序号" width="100"></el-table-column>
>>>>>>> 72ad58b115b5e1e2c9fcc74d8bd0842631428faa
      <el-table-column align="center" prop="id" label="第一级" width="120"></el-table-column>
      <el-table-column align="center" prop="organizationName" label="第二级" width="120"></el-table-column>
      <el-table-column align="center" prop="parentId" label="第三级(党小组数)" width="150"></el-table-column>
      <el-table-column align="center" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, list)"
            type="text"
            size="small"
          >移除</el-button>
        </template>
      </el-table-column>
    </el-table>
<<<<<<< HEAD
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="upPage"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
=======
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[3, 5, 10, 15]"
      :page-size="upPage"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
>>>>>>> 72ad58b115b5e1e2c9fcc74d8bd0842631428faa
  </div>
</template>


<script>
import { fetchMemberManamentList } from "@/api/orManagement";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      list: [],
      page: 1,
      upPage: 3,
<<<<<<< HEAD
      total:10,
=======
      total: 0,
>>>>>>> 72ad58b115b5e1e2c9fcc74d8bd0842631428faa
    };
  },
  computed: {
    // ...mapGetters(["manegementList"])
  },
  mounted() {
    this.getlist();
  },
  methods: {
    handleSizeChange(val) {
      this.upPage = val;
<<<<<<< HEAD
      this.getManagementList();
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getManagementList();
    },
    getManagementList() {
      // this.$store.dispatch("getUserList");
      const params = {
        pageData:{
=======
      this.getlist();
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getlist();
    },
    getlist() {
      // this.$store.dispatch("getUserList");
      const params = {
        pageData: {
>>>>>>> 72ad58b115b5e1e2c9fcc74d8bd0842631428faa
          currentPage: this.page,
          pageSize: this.upPage,
          sortName: " ",
          sortOrder: " "
        }
      };
      fetchMemberManamentList(params).then(response => {
<<<<<<< HEAD
        console.log("resonse = ", response.data.total);
        this.list = response.data.list;
        this.total=response.data.total;
=======
        this.list = response.data.list;
        this.total = response.data.total;
>>>>>>> 72ad58b115b5e1e2c9fcc74d8bd0842631428faa
      });
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    getRowClass() {
      return "background:#EEEEEE;color:black;text-align:center;font-size:14px;font-weight:500px;";
    }
  }
};
</script>

<style>
.management {
  margin-top: 40px;
  margin-left: 40px;
}
.add {
  position: absolute;
  top: 80px;
  left: 350px;
  z-index: 4;
}
.el-table .warning-row {
  background: oldlace;
  margin-top: 30px;
}
</style>
