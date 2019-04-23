<template>
  <div class="course">
    <div class="title-wrapper">
      <div class="catalog">
        <p>
          <span class="span-school">老年大学管理</span>
          <span class="span-course">课程管理</span>
        </p>
      </div>
      <div class="title">
        <p>
          <span>课程管理</span>
        </p>
      </div>
    </div>
    <div class="search-wrapper">
      <div class="search-key">
        关键字：
        <el-input class="inputClass" placeholder="课程/地点/任课地点/学时/学费金额" v-model="input">
        </el-input>
      </div>
      <div class="search-week">
        上课星期：
        <el-dropdown size="small" split-button type="primary">
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>全部</el-dropdown-item>
            <el-dropdown-item>星期一</el-dropdown-item>
            <el-dropdown-item>星期二</el-dropdown-item>
            <el-dropdown-item>星期三</el-dropdown-item>
            <el-dropdown-item>星期四</el-dropdown-item>
            <el-dropdown-item>星期五</el-dropdown-item>
            <el-dropdown-item>星期六</el-dropdown-item>
            <el-dropdown-item>星期日</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="search-time">
        上课时间：
        <el-dropdown size="small" split-button type="primary">
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>上午  8:00~10:00</el-dropdown-item>
            <el-dropdown-item>下午  7:00~9:00</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="search-startDate">
        开始上课日期:
        <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <div class="search-endDate">
        结束上课日期:
        <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <div class="search-startTime">
        报名开始时间:
        <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <div class="search-endTime">
        报名结束时间:
        <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </div>
      <div class="search-btnSearch">
        <el-button type="primary">搜索</el-button>
      </div>
      <div class="">
        <el-button type="primary">新增</el-button>
        <el-button>导出</el-button>
      </div>
    </div>
    
    <div>
      <el-table
      :data="list"
      border
      style="width: 100%"
     >
    <el-table-column
        prop="vcName"
        label="序号"
        width="180">
    </el-table-column>
    <el-table-column
        prop="vcTel"
        label="课程"
        width="180">
      </el-table-column>
      <el-table-column
        prop="groupName"
        label="星期">
      </el-table-column>
      <el-table-column
        prop="committeeName"
        label="上课时间">
      </el-table-column>
      <el-table-column
        prop=""
        label="开始上课日期">
      </el-table-column>
      <el-table-column
        prop=""
        label="结束上课日期">
      </el-table-column>
           <el-table-column
        prop=""
        label="地点">
      </el-table-column>
           <el-table-column
        prop=""
        label="任课教师">
      </el-table-column>
           <el-table-column
        prop=""
        label="学时">
      </el-table-column>
           <el-table-column
        prop=""
        label="学费金额">
      </el-table-column>
           <el-table-column
        prop=""
        label="报名开始时间">
      </el-table-column>
           <el-table-column
        prop=""
        label="报名结束时间">
      </el-table-column>  
         <el-table-column
        prop=""
        label="操作">
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script>
import { fetchCourseList } from "@/api/course";
import { mapGetters } from "vuex";
export default {
  name: "course",
  data() {
    return {
      input: "",
      pickerOptions: {
        shortcuts: [{
          text: "最近一周",
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit("pick", [start, end]);
          }
        }, 
        {
          text: "最近一个月",
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit("pick", [start, end]);
          }
        }, 
        {
          text: "最近三个月",
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit("pick", [start, end]);
          }
        }]
      },
      value1: "",
      value2: "",
      list: []
    };
  },
  computed: {
    ...mapGetters(["courseList"])
  },
  mounted() {
    this.getCourseList();
  },
  methods: {
    getCourseList() {
      // this.$store.dispatch("getUserList");
      const params = {
        status: '5',
        vcGroupNo: '001000003'
      };
      fetchCourseList(params).then(response => {
        console.log('resonse = ', response);
        this.list = response.result[1].items;
      });
    }
  }
};
</script>

<style>
.course {
  width: 1447px;
}

.title-wrapper {
  position: relative;
  width: 100%;
  height: 100px;
}

.catalog {
  position: absolute;
  left: 40px;
  top: 5px;
  font-size: 14px;
}

.span-school {
  color: #999999;
}

.span-course {
  color: #666666;
}

.title {
  position: absolute;
  left: 40px;
  bottom: 5px;
  font-size: 20px;
  color: #333333;
}

.search-wrapper {
  width: 100%;
  height: 182px;
  font-size: 12px;
  color: #666666;
  border: 1px solid red;
}

.search-key {
  display: inline-block;
  float: left;
  margin: 20px 0 0 15px;
  text-align: left;
  width: 212px;
  height: 28px;
  border: 1px solid red;
}

.search-week {
  display: inline-block;
  float: left;
  margin: 5px 0 0 15px;
  width: 127px;
  height: 50px;
  border: 1px solid red;
}


</style>
