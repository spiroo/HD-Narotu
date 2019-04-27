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
      <el-select class="ZB" v-model="ZBSelect" placeholder="请选择">
        <el-option
          v-for="item in ZBoptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      党小组：
      <el-select class="DXZ" v-model="DXZSelect" placeholder="请选择">
        <el-option
          v-for="item in DXZoptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      性别：
      <el-select class="XB" v-model="sex" placeholder="请选择">
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
      <el-select class="nation" v-model="nation" placeholder="请选择">
        <el-option
          v-for="item in SEXoptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
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
          prop="id"
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
          label="职级">
        </el-table-column>
        <el-table-column
          prop="partyDuties"
          label="党内职务">
        </el-table-column>
        <el-table-column
          prop="updateTime"
          label="入党时间">
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination class="fr"
        background
        layout="prev, pager, next"
        :total="1000">
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
        ZBSelect : {},
        sex: {},
        DXZSelect: {},
        birthday: "",
        nation:"",
        tableData: []
      }
    },
    created () {
      const params = {
        "formData": {
        },
        "pageData": {
          "currentPage": 0,
          "pageSize": 10,
          "sortName": " ",
          "sortOrder": " "
        }
      };
      accountList(params).then(response => {
        this.tableData = response.data.list;
        console.log("tableData"+this.tableData)
      });
    }
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
    }
  }
    
</style>