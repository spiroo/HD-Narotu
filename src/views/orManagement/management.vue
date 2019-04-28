<template>
  <div class="management">
    <div class="add">
      <el-button
        @click.native.prevent="deleteRow(scope.$index, tableData4)"
        type="text"
        size="small"
      >添加</el-button>
    </div>
    <el-table
      :data="tableData4"
      style="width: 100%;"
      max-height="100%"
      :header-cell-style="getRowClass"
    >
      <el-table-column align="center" fixed prop="number" label="序号" width="100"></el-table-column>
      <el-table-column align="center" prop="one" label="第一级" width="120"></el-table-column>
      <el-table-column align="center" prop="tow" label="第二级" width="120"></el-table-column>
      <el-table-column align="center" prop="three" label="第三级(党小组数)" width="150"></el-table-column>
      <el-table-column align="center" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData4)"
            type="text"
            size="small"
          >移除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
import { fetchMemberManamentList } from "@/api/orManagement";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      tableData4: {}
    };
  },
  computed: {
    ...mapGetters(["manegementList"])
  },
  mounted() {
    this.getManagementList();
  },
  methods: {
    getManagementList() {
      this.$store.dispatch("getUserList");
      const params = {
        status: "5",
        vcGroupNo: "001000003"
      };
      fetchMemberManamentList(params).then(response => {
        console.log("resonse = ", response);
        this.tableData4 = response.data.items;
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
