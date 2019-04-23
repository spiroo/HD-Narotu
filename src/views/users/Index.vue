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
<<<<<<< HEAD
import { fetchUserList, fetchMemberList } from "@/api/users";
import { mapGetters } from "vuex";
=======
import {fetchUserList, fetchMemberList } from '@/api/users';
import { mapGetters } from 'vuex'
>>>>>>> 01d66daa51779bb2d21cf693827f00de27712a90

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
<<<<<<< HEAD
      this.$store.dispatch("getUserList");
      // const params = {
      //   status: '5',
      //   vcGroupNo: '001000003'
      // };
      // fetchMemberList(params).then(response => {
      //   console.log('resonse = ', response);
      //   this.list = response.result[1].items;
      // });
=======
      this.$store.dispatch('getUserList');
      const params = {
        status: '5',
        vcGroupNo: '001000003'
      };
      fetchMemberList(params).then(response => {
        console.log('resonse = ', response);
        this.list = response.result[1].items;
      });
>>>>>>> 01d66daa51779bb2d21cf693827f00de27712a90
    }
  }
};
</script>
