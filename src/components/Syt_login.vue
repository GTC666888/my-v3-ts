<template>
  <!-- <Transition name="fade" mode="out-in" appear>
    
  </Transition> -->
  <Teleport to="body" v-if="visible">
    <div  class="login-dialog" @click="handleClickOutside">
      <div class="login-dialog-content" id="slideBox" ref="popup">
        <div class="dialog__header">
          <el-icon  @click="handleClose"><Close /></el-icon>
        </div>
        <div class="el-dialog__body">
          <div class="body-left">
            <div class="content">
              <div class="phone-number" v-if="!ruleForm.code">
                手机号码
              </div>
              <div class="phone-number" v-if="ruleForm.code">
                验证码已发送至{{ ruleForm.phone }}
              </div>
              <el-form
                ref="ruleFormRef"
                style="max-width: 600px"
                :model="ruleForm"
                :rules="rules"
                label-width="auto"
                class="demo-ruleForm"
                status-icon

              >
                <el-form-item label="" prop="phone" v-if="!ruleForm.code">
                  <el-input maxlength="11" class="login-input" v-model="ruleForm.phone" placeholder="请输入您的手机号" />
                </el-form-item>
                <el-form-item label="" prop="code" v-if="ruleForm.code" class="auth-code-item">
                  <el-input maxlength="11" class="login-input" v-model="ruleForm.code" placeholder="请输入验证码" />
                  <div class="auth-code-button">
                    <div v-if="time > 0">
                      {{ time }}
                    </div>
                    <div  @click="sendCode(ruleFormRef)" v-else>
                      重新获取
                    </div>
                  </div>
                </el-form-item>
              </el-form>
              <div class="send-button" @click="sendCode(ruleFormRef)" v-if="!ruleForm.code">
                获取验证码
              </div>
              <div class="send-button" @click="login" v-if="ruleForm.code">
                马上登录
              </div>
              <div class="weixin-icon">
                <SytSvg name="weixin" color="#4490f1" size="24"></SytSvg>
              </div>
              <div class="third-text">
                第三方账号登录
              </div>
            </div>
          </div>
          <div class="body-right">
            <div class="code-wrapper">
              <div class="wechat-code-wrapper wechat-code-wrapper1">
                <img src="//img.114yygh.com/static/web/code_login_wechat.png" alt="">
                <div class="code-text">
                  <SytSvg name="weixin" color="#00c25f" size="16"></SytSvg>
                  <p>
                    微信扫一扫关注
                  </p>
                  <p>
                    “快速预约挂号”
                  </p>
                </div>
              </div>
              <div class="wechat-code-wrapper wechat-code-wrapper2">
                <img src="//img.114yygh.com/static/web/code_app.png" alt="">
                <div class="code-text">
                  <p>
                    扫一扫下载
                  </p>
                  <p>
                    “预约挂号”APP
                  </p>
                </div>
              </div>
            </div>
            <div class="slogan">
              <div>
                xxxxxx官方指定平台
              </div>
              <div>
                快速挂号 安全放心
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script setup lang='ts'>
  import {
    useUseStore
  } from '@/pinia/modules/useStore'
  import {
    Close
  } from '@element-plus/icons-vue'
  import {
    computed,
    reactive,
    ref,
  } from 'vue'
  import {
    getSend,
    getLogin
  } from '@/api/login'
  import type {
    LoginResponesData
  } from '@/api/login/type'
  import type { FormRules, FormInstance } from 'element-plus'
  const ruleFormRef = ref<FormInstance>()
  const useStore = useUseStore()
  const popup = ref()
  const time = ref<number>(60)
  const handleClose = () => {
    useStore.loginVisible = false
  }
  interface RuleForm {
    phone: string,
    code: string,
  }
  const visible = computed(() => useStore.loginVisible)
  const ruleForm = reactive<RuleForm>({
    phone: '13555555555',
    code: ''
  })
  const rules = reactive<FormRules<RuleForm>>({
    phone: [
      { required: true, message: '请输入手机号码', trigger: 'blur' },
      { 
        pattern: /^1[3-9]\d{9}$/, 
        message: '手机号码格式不正确', 
        trigger: 'blur' 
      },
    ],
  })
  const handleClickOutside = (event:any) => {
    if (popup.value && !popup.value.contains(event.target)) {
      useStore.loginVisible = false;
    }
  };
  const sendCode = (formEl: FormInstance | undefined) => {
    if(!formEl) return
    formEl.validate((valid:any) => {
      if(valid) {
        getSend(ruleForm.phone).then( (res: LoginResponesData) => {
          ruleForm.code = res.data || '500800'
          time.value = 10
          setTime()
        })
      }
    })
  }
  
  const setTime = () => {
    let timeOut = setTimeout(() => {
      console.log('进入',time.value);
      if(time.value > 0) {
        time.value -= 1 
        setTime()
        clearTimeout(timeOut)
      }else {
        clearTimeout(timeOut)
      }
    },1000)
    
  }
  const login = () => {
    getLogin(ruleForm).then( (res:any) => {
      useStore.loginVisible = false
      useStore.userInfo = res.data
      location.reload()
    })
  }
</script>
<script lang="ts">
  export default {
    name: 'SytLogin'
  }
</script>
<style scoped lang='scss'>
  .login-dialog {
    z-index: 3000;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    transform: background-color 1s;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-dialog-content {
      width: 950px;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
      box-sizing: border-box;
      background-color: #f7fbff;
      .dialog__header {
        background-color: #e8f2ff;
        padding: 20px 30px;
        border-radius: 4px 4px 0 0;
        position: relative;
        .el-icon {
          position: absolute;
          right: 20px;
          font-size: 20px;
          cursor: pointer;
        }
      }
      .el-dialog__body {
        padding: 0 35px 30px 35px;
        display: flex;
        .body-left {
          width: 440px;
          height: 100%;
          background-color: #fff;
          .content {
            margin-top: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .phone-number {
              letter-spacing: 1px;
              font-weight: 700;
              color: #333;
              font-size: 16px;
            }
            .send-button {
              width: 308px;
              height: 44px;
              background-color: #4490f1;
              border-radius: 4px;
              color: #fff;
              line-height: 44px;
              text-align: center;
              cursor: pointer;
              margin: 60px 0 30px 0;
              box-shadow: 0 10px 20px -10px rgba(73, 144, 241, .5);
              user-select: none; /* 禁止文本选中 */
              -webkit-user-select: none; /* Safari */
              -moz-user-select: none; /* Firefox */
              -ms-user-select: none; /* Internet Explorer/Edge */
              &:hover {
                background-color: #3a80e6;
              }
            }
            .weixin-icon {
              margin-top: 50px;
              width: 40px;
              height: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #00c25f;
              border-radius: 50%;
              cursor: pointer;
              &:hover {
                background-color: #00a14e;
              }
            }
            .third-text {
              color: #ccc;
              margin: 10px 0;
            }
          }
        }
        .body-right {
          width: 440px;
          padding-left: 74px;
          padding-top: 70px;
          display: flex;
          flex-direction: column;
          .code-wrapper {
            display: flex;
            flex: 1;
            .wechat-code-wrapper {
              img {
                width: 140px;
                height: 140px;
                margin-bottom: 22px;
              }
              .code-text {
                color: #333;
                font-size: 14px;
                text-align: center;
                line-height: 21px;
              }
            }
            .wechat-code-wrapper2 {
              margin-left: 46px;
            }
          }
          .slogan {
            width: 318px;
            margin-top: 40px;
            font-size: 20px;
            font-weight: 300;
            font-style: italic;
            letter-spacing: 4px;
            color: #000;
            line-height: 44px;
            text-align: center;
          }
        }
      }
    }
  }
  ::v-deep(.login-input) {
    width: 308px;
    margin-top: 70px;
    .el-input__wrapper {
      box-shadow: none;
      font-size: 16px;
      padding: 0;
      border-radius: 0;
      .el-input__inner {
        border-bottom: 1px solid #e0e0e0;
        &:hover {
          border-color: #4490f1;
        }
        &:focus {
          border-color: #4490f1;
        }
      }
    }
    .is-error {
      box-shadow: none;
    }
  }
  ::v-deep(.el-form-item__error) {
    margin-top: 5px;
  }
  ::v-deep.el-form-item.is-error .el-input__wrapper, .el-form-item.is-error  {
    box-shadow: none !important;
  }
  .auth-code-item {
    position: relative;
    .auth-code-button {
      position: absolute;
      right: 0;
      top: 64px;
      color: #4490f1;
      cursor: pointer;
    }
  }
  ::v-deep(.el-input__suffix-inner) {
    display: none !important;
  }
</style>