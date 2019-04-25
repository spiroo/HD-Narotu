<template>
  <el-table
    :data="userList[1].items"
    border
    style="width: 100%"
  >
    <el-table-column
      prop="vcName"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="vcTel"
      label="手机号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="groupName"
      label="支部">
    </el-table-column>
    <el-table-column
      prop="committeeName"
      label="党委">
    </el-table-column>
  </el-table>
</template>

<script>
import { fetchUserList, fetchMemberList } from "@/api/users";
import { mapGetters } from "vuex";

export default {
  name: "users",
  data() {
    return {
      list: []
    };
  },
  computed: {
    ...mapGetters(["userList"])
  },
  mounted() {
    this.getUserList();
  },
  methods: {
    getUserList() {
      this.$store.dispatch('getUserList');
      const params = {
        status: '5',
        vcGroupNo: '001000003'
      };
      fetchMemberList(params).then(response => {
        console.log('resonse = ', response);
        this.list = response.result[1].items;
      });
    }
  }
};
</script>
