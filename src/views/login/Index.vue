<template>
  <div class="login">
    <h1>航天金秋后台管理系统</h1>
    <el-input v-model="loginNumber.username" placeholder="请输入内容" class="account-number"></el-input>
    <el-input v-model="loginNumber.password" placeholder="请输入内容" class="password"></el-input>
    <el-input placeholder="验证码" class="check-code-inpit"></el-input>
    <el-button class="getCheckImg" type="info" plain>获取验证码</el-button>
    <a href="http://localhost:8080/forgetPassword">忘记密码</a>
    <div class="forgetPassword"><input type="checkbox"/>记住密码</div> 
    <el-button class="submit" type="primary" @click="_login">主要按钮</el-button>
  </div>
</template>

<script>
import { appLogin } from '@/api/login.js';
import { checkImg } from '@/api/login.js';
import { dataCeshi } from '@/api/login.js';
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
      const params2 = {
        "formData": {
        },
        "pageData": {
          "currentPage": 0,
          "pageSize": 20,
          "sortName": " ",
          "sortOrder": " "
        }
      };
      appLogin(params).then(response => {
        if (response.code === ERROR_CODE) {

        } else {
          console.log("存储token："+response.data.token)
          this.$store.commit('COMMIT_TOKEN',response.data);
        }
      });
      console.log(this.userToken);
      dataCeshi(params2).then(response => {
        console.log('resonse = ', response);
      });
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
  .login {
    margin: 0 auto;
    margin-top: 200px;
    height: 411px;
    width: 357px;
  }
  .login .account-number {
    line-height: 70px;
    height: 70px;
  }
  .login .password {
    line-height: 70px;
    height: 70px;
  }
  .login .getCheckImg {
    float: right;
    width: 150px;
    margin-bottom: 10px;
  }
  .login .check-code-inpit {
    float: left;
    width: 199px;
    margin-bottom: 10px;
  }
  .login a {
    float: left;
    display: block;
    line-height: 24px;
    margin-top:8px;
    color: red;
  }
  .login .forgetPassword {
    display: block;
    line-height: 24px;
    margin-top:8px;
    float: right;
  }
  .login .check-code {
    
  }
  .login .submit {
    margin-top: 12px;
    width:100%;
  }
</style>
