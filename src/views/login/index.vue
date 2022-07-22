<template>
  <div id="login-container" class="login-container">
    <div class="login-content">
      <div v-show="step === 0" class="content">
        <el-form ref="form" :model="form" :rules="rules" class="login-form" autocomplete="on" label-position="left">

          <div class="title-container">
            <h3 class="title">
              <img v-if="logo" :src="logo" class="sidebar-logo">元农源供应商管理{{ $t('login.title') }}
            </h3>
            <lang-select v-if="false" class="set-language" />
          </div>

          <el-form-item prop="account">
            <span class="svg-container">
              <svg-icon icon-class="user" />
            </span>
            <el-input
              ref="account"
              v-model="form.account"
              :placeholder="$t('login.username')"
              name="account"
              type="text"
              tabindex="1"
              autocomplete="on"
            />
          </el-form-item>

          <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
            <el-form-item prop="password">
              <span class="svg-container">
                <svg-icon icon-class="password" />
              </span>
              <el-input
                :key="passwordType"
                ref="password"
                v-model="form.password"
                :type="passwordType"
                :placeholder="$t('login.password')"
                name="password"
                tabindex="2"
                autocomplete="on"
                @keyup.native="checkCapslock"
                @blur="capsTooltip = false"
                @keyup.enter.native="handleLogin"
              />
              <span class="show-pwd" @click="showPwd">
                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
              </span>
            </el-form-item>
          </el-tooltip>

          <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">
            {{ $t('login.logIn') }}
          </el-button>

          <div v-if="false" style="position:relative">
            <div class="tips">
              <span>{{ $t('login.username') }} : admin</span>
              <span>{{ $t('login.password') }} : {{ $t('login.any') }}</span>
            </div>
            <div class="tips">
              <span style="margin-right:18px;">
                {{ $t('login.username') }} : editor
              </span>
              <span>{{ $t('login.password') }} : {{ $t('login.any') }}</span>
            </div>

            <el-button class="thirdparty-button" type="primary" @click="showDialog=true">
              {{ $t('login.thirdparty') }}
            </el-button>
          </div>

        </el-form>
      </div>
      <div v-show="step === 1" class="content">
        <google-code :login-form="form" />
      </div>
    </div>
    <el-dialog :title="$t('login.thirdparty')" :visible.sync="showDialog">
      {{ $t('login.thirdpartyTips') }}
      <br>
      <br>
      <br>
      <social-sign />
    </el-dialog>
    <authenticator-dialog
      v-if="googleCodeVisible"
      ref="googleCode"
    />
  </div>
</template>

<script>
import { validEmail, validPhone } from '@/utils/validate'

import LangSelect from '@/components/LangSelect'
// import Copyright from '@/components/Copyright'
import SocialSign from './components/SocialSignin'
import GoogleCode from './components/GoogleCode'
import { checkBind } from '@/api/common'

export default {
  name: 'Login',
  components: {
    LangSelect,
    SocialSign,
    /* Copyright,*/
    GoogleCode
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validEmail(value) && !validPhone(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能少于6位'))
      } else {
        callback()
      }
    }
    return {
      form: {
        account: '',
        password: '',
        verification_code: ''
      },
      rules: {
        account: [{ required: true, trigger: ['blur', 'change'], validator: validateUsername }],
        password: [{ required: true, trigger: ['blur', 'change'], validator: validatePassword }],
        verification_code: [{ required: true, trigger: ['blur', 'change'], message: '不能为空' }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {},
      logo: 'favicon.png',
      googleCodeVisible: false,
      step: 0
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  mounted() {
    if (this.form.account === '') {
      this.$refs.account.focus()
    } else if (this.form.password === '') {
      this.$refs.password.focus()
    }
  },
  methods: {
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          checkBind(this.form)
            .then(response => {
              if ([1, '1'].includes(response.data.is_bind)) {
                this.step = 1
              } else {
                this.onGoogleCode(Object.assign(response.data, this.form))
              }
            })
            .finally(() => {
              this.loading = false
            })
        } else {
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    },
    onGoogleCode(data) {
      this.googleCodeVisible = true
      this.$nextTick(() => {
        this.$refs.googleCode && this.$refs.googleCode.init(data)
      })
    },
    onStep(val) {
      this.step = val
    }

  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .sidebar-logo {
    width: 32px;
    height: 32px;
    vertical-align: middle;
    margin-right: 12px;
  }
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 0 35px 0;
    margin: 0 auto;
    overflow: hidden;
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;

        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-content {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    .set-language {
      color: #fff;
      position: absolute;
      top: 3px;
      font-size: 18px;
      right: 0px;
      cursor: pointer;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>

