<template>
  <el-table
    :data="tableData4"
    style="width: 100%;"
    max-height="100%"
    :header-cell-style="getRowClass"
  >
    <el-table-column fixed prop="number" label="序号" width="100"></el-table-column>
    <el-table-column prop="one" label="第一级" width="120"></el-table-column>
    <el-table-column prop="tow" label="第二级" width="120"></el-table-column>
    <el-table-column prop="three" label="第三级(党小组数)" width="150"></el-table-column>
    <el-table-column width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="text"
          size="small"
        >移除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { fetchMemberManamentList } from "@/api/orManagement.js";

export default {
  mounted() {
    this.getA();
  },
  methods: {
    getA() {
      const params = {
        formData: {},
        pageData: {
          currentPage: 0,
          pageSize: 20
        }
      };
      fetchMemberManamentList(params).then(response => {
        console.log("resonse = ", response);
        this.list = response.result[1].items;
      });
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    getRowClass(rowIndex) {
      if (rowIndex === 0) {
        return "background:#EEEEEE;color:black;text-align:center;font-size:9px;font-weight:500;";
      } else {
        return "";
      }
    }
  },
  data() {
    return {
      tableData4: [
        {
          number: "1",
          one: "党总支",
          tow: "第一党支书",
          three: "5"
        },
        {
          number: "2",
          one: "党总支",
          tow: "第一党支书",
          three: "5"
        },
        {
          number: "3",
          one: "党总支",
          tow: "第一党支书",
          three: "5"
        },
        {
          number: "4",
          one: "党总支",
          tow: "第一党支书",
          three: "5"
        },
        {
          number: "5",
          one: "党总支",
          tow: "第一党支书",
          three: "5"
        },
        {
          number: "6",
          one: "党总支",
          tow: "第一党支书",
          three: "5"
        },
        {
          number: "7",
          one: "党总支",
          tow: "第一党支书",
          three: "5"
        }
      ]
    };
  }
};
</script>

<style>
.el-table .warning-row {
  background: oldlace;
  margin-top: 30px;
}
</style>
