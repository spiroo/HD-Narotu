<template>
  <div class="forget-password">
    <div><a class="" href="">找回密码</a><a href="">返回登陆</a></div>
    <br/>
    <el-input class="input" v-model="tel" placeholder="请输入内容"></el-input>
    <el-input class="check-input-code-img" v-model="tel" placeholder="输入图片验证码"></el-input>
    <img class="code-img" src="" alt="">
    <el-input class="check-input" v-model="tel" placeholder="输入手机验证码"></el-input>
    <el-button class="get-check-code" type="info" plain>获取验证码</el-button>
    <el-input class="input" v-model="tel" placeholder="输入新密码"></el-input>
    <!-- <h1>航天金秋后台管理系统</h1>
    <el-input v-model="loginNumber.username" placeholder="请输入内容" class="account-number"></el-input>
    <el-input v-model="loginNumber.password" placeholder="请输入内容" class="password"></el-input>
    <el-input placeholder="验证码" class="check-code-inpit"></el-input>
    <el-button class="getCheckImg" type="info" plain>获取验证码</el-button>
    <a href="http://localhost:8080/forgetPassword">忘记密码</a>
    <div class="forgetPassword"><input type="checkbox"/>记住密码</div> 
    <el-button class="submit" type="primary" @click="_login">主要按钮</el-button> -->
  </div>
</template>

<script>
import { appLogin } from '@/api/login.js';
import { checkImg } from '@/api/login.js';
import { mapGetters } from 'vuex'
var ERROR_CODE = "1";

export default {
  name: 'login',
  data() {
    return {
      loginNumber: {
        password: "",
        username: ""
      }
    }
  },
  methods: {
    _login() {
      const params = {
        "password": "123456",
        "username": "15731286750"
      };
      appLogin(params).then(response => {
        console.log('resonse = ', response);
        if (response.code === ERROR_CODE) {
        }else {
          console.log("存储token："+response.data.token)
          this.$store.commit('COMMIT_TOKEN',response.data);
        }
      });
      console.log(this.userToken);
    }
  },
  computed: {
    ...mapGetters(['userToken']),
    checkCode () {
      
    }
  },
}
</script>
<style lang="scss" scoped>
  .fl {
    float: left;
  }
  .forget-password {
    margin: 0 auto;
    margin-top: 200px;
    height: 411px;
    width: 357px;
  }
  .forget-password .input {
    line-height: 60px;
  }
  .forget-password .check-input-code-img {
    width:220px;
    line-height: 60px;
  }
  .forget-password .code-img {
    float: right;
    height: 50px;
    width: 120px;
    line-height: 60px;
  }
  .forget-password .check-input {
    float: left;
    width:220px;
    line-height: 60px;
  }
  .forget-password .get-check-img {
    float: right;
    width: 120px;
    line-height: 60px;
  }
</style>
