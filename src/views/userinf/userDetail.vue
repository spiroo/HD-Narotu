<template>
  <div class="detail">
    <div class="header">
      <span>用户管理 /用户信息管理 / 用户信息详情</span>
      <img src="" alt="头像">
      <div class="name">{{ detail.name }}</div>
      <div class="infList">
        <span>支部</span>
        <span>{{ detail.organizationId }}</span>
        <span>党小组</span>
        <span>{{ detail.organizationGroupId }}</span>
        <span>信息号</span>
        <span>{{ detail.informationNumber }}</span>
        <span>性别</span>
        <span>{{ detail.sex }}</span>
        <span>年龄</span>
        <span>{{ detail.age }}</span>
        <span>出生日期</span>
        <span>{{ detail.birthday }}</span>
        <span>民族</span>
        <span>{{ detail.nation }}</span>
        <span>身份证号</span>
        <span>{{ detail.idendityId }}</span>
        <span>职级</span>
        <span>{{ detail.rank }}</span>
        <span>党小组</span>
        <span>{{ detail.organizationGroupId }}</span>
        <span>入党时间</span>
        <span>{{ detail.retirementTime }}</span>
        <span>离/退休</span>
        <span>{{detail.idendityId}}</span>
        <span>离退休时间</span>
        <span>{{detail.idendityId}}</span>
        <span>离退休时单位名称</span>
        <span>{{detail.idendityId}}</span>
        <span>职务</span>
        <span>{{detail.idendityId}}</span>
        <span>联系电话</span>
        <span>{{detail.idendityId}}</span>
        <span>紧急联系人</span>
        <span>{{detail.idendityId}}</span>
        <span>紧急联系电话</span>
        <span>{{detail.idendityId}}</span>
        <span>现居地址</span>
        <span>{{detail.idendityId}}</span>
        <span>请假次数</span>
        <span>{{detail.idendityId}}</span>
        <span>住院登记次数</span>
        <span>{{detail.idendityId}}</span>
        <span>帮扶次数</span>
        <span>{{detail.idendityId}}</span>
        <span>慰问</span>
        <span>{{detail.idendityId}}</span>
        <span>积分</span>
        <span>{{detail.idendityId}}</span>
        <span>用户密码</span>
        <span>{{detail.idendityId}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { accountDetail } from '@/api/userInf.js';
export default {
  data() {
    return {
      id: "",
      detail:{

      }
    }
  },
  created () {
    this.id = this.$route.params.id;
    const params = {
        id: ""
      };
      params.id = this.id;
      accountDetail(params).then(detail => {
        this.detail = detail.data;
        console.log(detail);
      });
  },
};
</script>

<style lang="scss" scoped>
  .infList {
    span {
      margin-top:14px;
    }
    .key {
      line-height: 24px;
      height: 24px;
      width:10%;
    }
    .value {
      line-height: 24px;
      height: 24px;
      width:10%;
    }
  }
</style>
