<template>
    <div class="register">
        <div class="register-top">
            <span class="register-top-left">欢迎注册</span>
            <span class="register-top-right">已有账号？</span>
            <a href="#">请登录></a>
        </div>
        <div class="register-contain">
            <div class="register-contain-content">
                <div class="register-contain-content-circle">
                    <div class="register-contain-content-circle-first">
                        <p class="register-contain-content-circle-first-p1">1</p>
                        <p class="register-contain-content-circle-first-p2">验证手机号</p>
                        <!-- <i class="el-icon-minus"></i> -->
                        <div class="register-contain-content-circle-first-p3"></div>
                    </div>
                    <div class="register-contain-content-circle-second">
                        <p class="register-contain-content-circle-second-p1">2</p>
                        <p class="register-contain-content-circle-second-p2">填写账号信息</p>
                        <div class="register-contain-content-circle-second-p3"></div>
                    </div>
                     <div class="register-contain-content-circle-third">
                        <p class="register-contain-content-circle-third-p1">3</p>
                        <p class="register-contain-content-circle-third-p2">注册成功</p>

                    </div>
                </div>
                <div class="register-contain-content-bottom">
                    <div class="register-contain-content-bottom-input">
                        <label>中国大陆</label>
                        <input type="text" placeholder="请输入常用的手机号">
                    </div>
                    <div class="register-contain-content-bottom-card">
                        <label>验证码</label>
                        <input type="text" placeholder="请输入验证码">
                        <button>获取验证码</button>
                    </div>
                      <el-button class="next" type="next">下一步</el-button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/css/register/register.scss';
</style>