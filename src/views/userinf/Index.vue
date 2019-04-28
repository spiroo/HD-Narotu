<template>
  <div class="user-inf">
    <div class="header">
      <span class="fl">用户管理/</span>
      <span class="fl">用户信息管理</span>
      <div class="cb"></div>
      <h3 class="fl">用户信息管理</h3>
    </div>
    <div class="content">
      关键字：
      <el-input class="key-word"  placeholder="请输入内容"></el-input>
      支部：
      <el-select class="ZB" v-model="formData.ZBSelect" placeholder="请选择">
        <el-option
          v-for="item in ZBoptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      党小组：
      <el-select class="DXZ" v-model="formData.DXZSelect" placeholder="请选择">
        <el-option
          v-for="item in DXZoptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      性别：
      <el-select class="XB" v-model="formData.sex" placeholder="请选择">
        <el-option
          v-for="item in SEXoptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
       出生日期：
      <el-input class="birthday"
        placeholder="请选择日期"
        suffix-icon="el-icon-date"
        v-model="birthday">
      </el-input>
      
      民族：
      <el-select class="nation" v-model="formData.nation" placeholder="请选择">
        <el-option
          v-for="item in nationOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" @click="listDataChangeAndInit">查询</el-button>
      <!-- 党内职务：
      <el-select class="DNZW" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in SEXoptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      入党时间：
      <el-select class="RDSJ" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in SEXoptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <!-- table -->
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="100">
        </el-table-column>
        <el-table-column
          prop="realname"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="idendityId"
          label="信息号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄">
        </el-table-column>
        <el-table-column
          prop="birthday"
          label="出生日期">
        </el-table-column>
        <el-table-column
          prop="nation"
          label="民族">
        </el-table-column>
        <el-table-column
          prop="idendityId"
          label="身份证号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="rank"
          label="职级"
          width="100">
        </el-table-column>
        <el-table-column
          label = "操作"
          width = "200">
          <template slot-scope="scope">
            <router-link :to="`/userDetail/${scope.row.id}`">查看</router-link>
            修改
          </template>
        </el-table-column>
        <el-table-column
          prop="updateTime"
          label="入党时间">
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination class="fr"
        background
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        layout="prev, pager, next"
        :total="totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { accountList } from '@/api/userInf.js';
  export default {
    data() {
      return {
        ZBoptions: [{
          value: '第一党支部',
          label: '第一党支部'
        }, {
          value: '第二党支部',
          label: '第二党支部'
        }, {
          value: '第三党支部',
          label: '第三党支部'
        }, {
          value: '第四党支部',
          label: '第四党支部'
        }, {
          value: '第五党支部',
          label: '第五党支部'
        }],
        DXZoptions: [{
          value: '第一党支部',
          label: '第一党支部'
        }, {
          value: '第二党支部',
          label: '第二党支部'
        }, {
          value: '第三党支部',
          label: '第三党支部'
        }, {
          value: '第四党支部',
          label: '第四党支部'
        }, {
          value: '第五党支部',
          label: '第五党支部'
        }],
        SEXoptions: [{
          value: '男',
          label: '男'
        },
        {
          value: '女',
          label: '女'
        }],
        nationOptions: [{
          value: '汉族',
          label: '汉族'
        },
        {
          value: '满族',
          label: '满族'
        }],
        ZBSelect : {},
        sex: {},
        DXZSelect: {},
        birthday: "",
        nation:"",
        tableData: [],
        currentPage: 0,
        totalCount : 0,
        // 向服务器请求时携带的筛选参数
        formData: {
          sex: "",
          nation: ""
        }
      }
    },
    created () {
      const params = {
        formData: {

        },
        pageData: {
          currentPage: 1,
          pageSize: 10,
          sortName: " ",
          sortOrder: " "
        }
      };
      accountList(params).then(response => {
        this.totalCount = response.data.total;
        this.tableData = response.data.list;
      });
    },
    methods: {
      handleCurrentChange() {
        this.listDataChangeAndInit();
      },
      listDataChangeAndInit () {
        const params = {
          pageData: {
            currentPage: 0,
            pageSize: 10,
            sortName: " ",
            sortOrder: " "
          }
        };
        params.formData = this.formData;
        params.pageData.currentPage = this.currentPage;
        console.log("page："+this.currentPage)
        accountList(params).then(response => {
          this.totalCount = response.data.total;
          this.tableData = response.data.list;
          console.log(response);
        });
      },
      toview (index) {
        console.log("index");
      }
    },
  }
</script>
<style lang="scss" scoped>
  .user-inf {
    background: #f3f3f3;
    // 左右浮动 和 清除浮动
    .fl {
      float: left;
    }
    .fr {
      float: right;
    }
    .cb {
      clear: both;
    }
    .header {
      padding: 0 50px;
      height: 100px;
      width:100%;
      background: #fff;
      box-sizing: border-box;
      span {
        margin-top:12px;
        font-size:14px;
      }
      h3 {
        font-weight: 500;
      }
    }
    .content {
      height: 800px;
      padding: 40px 40px;
      background: #fff;
      margin:30px;
      box-sizing: border-box;
      .key-word {
        height: 40px;
        width: 200px;
      }
      .ZB {
        height: 40px;
        width:120px;
      }
      .DXZ {
        height: 40px;
        width:120px;
      }
      .XB {
        height: 40px;
        width:120px;
      }
      .birthday {
        height: 40px;
        width: 200px; 
      }
      .nation {
        height: 40px;
        width:120px;
      }
      .DNZW {
        height: 40px;
        width:120px;
      }
      .RDSJ {
        height: 40px;
        width:120px;
      }
      // 查看 ，修改，删除
      .CZ {
        padding: 0 10px;
        color: blue;
      }
    }
  }
    
</style>