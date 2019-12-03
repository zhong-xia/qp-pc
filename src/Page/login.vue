<template>
  <div class="wrapper">
    <div class="wrapper-header">欢迎登陆!</div>
    <div class="wrapper-contain">
      <div class="wrapper-contain-left">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574050525188&di=be9bfc33d4885da3ccde7166cb5976cc&imgtype=0&src=http%3A%2F%2Fpic74.nipic.com%2Ffile%2F20150813%2F10634318_132510392000_2.jpg" alt />
      </div>
      <div class="wrapper-contain-right">
        <div class="wrapper-contain-right-top">
          <span class="wrapper-contain-right-top-password">账号密码登录</span>
          <label>|</label>
          <span>手机密码登录</span>
        </div>
        <div class="wrapper-contain-right-username">
          <el-input :class="{error:error && !userName}" v-model="userName" placeholder="手机号/用户名/邮箱" prefix-icon="profile"></el-input>
          <span>
            <i class="el-icon-user"></i>
          </span>
        </div>
        <div class="wrapper-contain-right-password">
           <el-input :class="{error:error && !password}" v-model="password" type="password" prefix-icon="password" placeholder="密码"></el-input>
          <span>
            <i class="el-icon-lock"></i>
          </span>
       </div>
       
        <el-button type="login" class="wrapper-contain-right-button">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../assets/css/login/login.scss';
</style>