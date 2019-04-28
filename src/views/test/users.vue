<template>
  <div>
    <el-table :data="usetTable" stripe style="width: 100%">
      <el-table-column label="序号">
        <template slot-scope="scope">{{scope.$index+1}}</template>
      </el-table-column>
      <el-table-column prop="email" label="email"></el-table-column>
      <el-table-column prop="name" label="name"></el-table-column>
      <el-table-column prop="phone" label="phone"></el-table-column>
      <el-table-column prop="username" label="username"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[3, 5, 10, 15]"
      :page-size="upPage"
      layout="total, sizes, prev, pager, next, jumper"
      :total="datacount"
    ></el-pagination>
  </div>
</template>

<script>
import { fetchUsers } from "@/api/fetch";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      usetTable: [],
      page: 1,
      upPage: 3,
    };
  },
  computed: {
    ...mapGetters(["datacount"])
  },
  mounted() {
    this.getFachUsers();
  },
  methods: {
    getFachUsers() {
      const params = {
        _page: this.page,
        _limit: this.upPage
      };
      fetchUsers(params).then(response => {
        this.usetTable = response;
        console.log(this.$store.state.datacount);
      });
    },
    handleSizeChange(val) {
      this.upPage=val;
      
      this.getFachUsers();
    },
    handleCurrentChange(val) {
      this.page = val;
      console.log(`当前页: ${val}`);
      this.getFachUsers();
    }
  }
};
</script>

<style>
</style>


