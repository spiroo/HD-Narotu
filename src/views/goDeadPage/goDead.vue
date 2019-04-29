<template>
  <div>
    <div class="header">
      <div class="header_top">
        <span class="header_top_left">用户管理</span>
        <span class="header_top_right">离世信息管理</span>
      </div>
      <div class="header_buttom">
        <h2 class="header_buttom_left">离世信息管理</h2>
      </div>
    </div>
    <div class="search">
      <el-form ref="form" :model="form">
        <div class="search_top">
          <el-form-item label="关键字">
            <el-input v-model="temp"></el-input>
          </el-form-item>
          <el-form-item label="支部">
            <el-select v-model="temp" placeholder="全部">
              <el-option
                v-for="(temp , index) in data"
                :key="index"
                label="temp.name"
                value="temp.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="党小组">
            <el-select v-model="temp" placeholder="全部">
              <el-option
                v-for="(temp , index) in data"
                :key="index"
                label="temp.name"
                value="temp.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="temp" placeholder="全部">
              <el-option
                v-for="(temp , index) in data"
                :key="index"
                label="temp.name"
                value="temp.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出生日期">
            <el-date-picker v-model="temp" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="离世日期">
            <el-date-picker v-model="temp" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="民族">
            <el-select v-model="temp" placeholder="全部">
              <el-option
                v-for="(temp , index) in data"
                :key="index"
                label="temp.name"
                value="temp.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="职级">
            <el-select v-model="temp" placeholder="全部">
              <el-option
                v-for="(temp , index) in data"
                :key="index"
                label="temp.name"
                value="temp.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="党内职务">
            <el-select v-model="temp" placeholder="全部">
              <el-option
                v-for="(temp , index) in data"
                :key="index"
                label="temp.name"
                value="temp.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="入党时间">
            <el-date-picker v-model="temp" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
        </div>
        <div class="search_buttom">
          <el-form-item label="参加工作时间">
            <el-date-picker v-model="temp" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="离/退休：">
            <el-select v-model="temp" placeholder="全部">
              <el-option
                v-for="(temp , index) in data"
                :key="index"
                label="temp.name"
                value="temp.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="离退休时间：">
            <el-date-picker v-model="temp" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="离退休时单位名称：">
            <el-select v-model="temp" placeholder="全部">
              <el-option
                v-for="(temp , index) in data"
                :key="index"
                label="temp.name"
                value="temp.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="职务：">
            <el-select v-model="temp" placeholder="全部">
              <el-option
                v-for="(temp , index) in data"
                :key="index"
                label="temp.name"
                value="temp.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="现居住地址：">
            <el-input v-model="temp"></el-input>
          </el-form-item>
          <el-form-item label="请假次数：">
            <el-input v-model="temp"></el-input>
          </el-form-item>
          <el-form-item label="住院登记次数">
            <el-input v-model="temp"></el-input>
          </el-form-item>
          <el-form-item label="帮扶次数">
            <el-input v-model="temp"></el-input>
          </el-form-item>
          <el-form-item label="慰问次数：">
            <el-input v-model="temp"></el-input>
          </el-form-item>
          <el-form-item label="积分：">
            <el-select v-model="temp" placeholder="全部">
              <el-option
                v-for="(temp , index) in data"
                :key="index"
                label="temp.name"
                value="temp.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="创建时间：">
            <el-date-picker v-model="temp" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
          <label>离世用户数量{ {temp} }}人</label>
        </div>
      </el-form>
    </div>
    <div class="tabArea">
      <div class="optotion">
        <el-button type="primary">+新增</el-button>
        <el-button type="primary">导入</el-button>
        <el-button type="primary">导出</el-button>
      </div>
      <div class="tabBox">
        <el-table :data="tablelist" border style="width: 100%">
          <el-table-column prop="id" label="序号" width="150"></el-table-column>
          <el-table-column prop="retirementName" label="支部" width="120"></el-table-column>
          <el-table-column prop="organizationGroupId" label="党小组" width="120"></el-table-column>
          <el-table-column prop="idendityId" label="信息号" width="120"></el-table-column>
          <el-table-column prop="realname" label="姓名" width="120"></el-table-column>
          <el-table-column prop="sex" label="性别" width="120"></el-table-column>
          <el-table-column prop="age" label="年龄" width="120"></el-table-column>
          <el-table-column prop="birthday" label="出生日期" width="120"></el-table-column>
          <el-table-column prop="leaveTime" label="离世日期" width="120"></el-table-column>
          <el-table-column prop="nation" label="民族" width="120"></el-table-column>
          <el-table-column prop="name" label="身份证号码" width="120"></el-table-column>
          <el-table-column prop="rank" label="职级" width="120"></el-table-column>
          <el-table-column prop="partyDuties" label="党内职务" width="120"></el-table-column>
          <el-table-column prop="joinTime" label="入党时间" width="120"></el-table-column>
          <el-table-column prop="workingTime" label="参加工作时间" width="120"></el-table-column>
          <el-table-column prop="isDepart" label="离/退休" width="120"></el-table-column>
          <el-table-column prop="retirementTime" label="离退休时间" width="120"></el-table-column>
          <el-table-column prop="retirementName" label="离退休时单位名称" width="120"></el-table-column>
          <el-table-column prop="duty" label="职务" width="120"></el-table-column>
          <el-table-column prop="mobile" label="联系电话" width="120"></el-table-column>
          <el-table-column prop="emergencyContact" label="紧急联系人" width="120"></el-table-column>
          <el-table-column prop="emergencyPhone" label="紧急联系电话" width="120"></el-table-column>
          <el-table-column prop="address" label="现居住地址" width="120"></el-table-column>
          <el-table-column prop="holidayTimes" label="请假次数" width="120"></el-table-column>
          <el-table-column prop="hospitalizationTimes" label="住院登记次数" width="120"></el-table-column>
          <el-table-column prop="helpTimes" label="帮扶次数" width="120"></el-table-column>
          <el-table-column prop="visitTimes" label="慰问次数" width="120"></el-table-column>
          <el-table-column prop="name" label="积分" width="120"></el-table-column>
          <el-table-column prop="password" label="用户密码" width="120"></el-table-column>
          <template>
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">修改</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
          <el-table-column prop="updateTime" label="创建时间" width="120"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { getTableList } from "@/api/godead.js";
export default {
  methods: {
    init() {
      const params = {
        pageSize: "",
        currentPage: ""
      };
      getTableList(params).then(response => {
        console.log("resonse = ", response);
        this.tablelist = response.list;
      });
    }
  },
  data: {
    tablelist: {}
  },
  beforeCreate: init()
};
</script>

<style>
.header{
   position: absolute;
  left: 0px;
  top: 0px;
  width: 3040px;
  height: 100px;
  background: inherit;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(228, 228, 228, 1);
  border-left: 0px;
  border-top: 0px;
  border-right: 0px;
  border-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  box-shadow: none;
}
</style>
