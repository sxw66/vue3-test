<template>
  <div class="login-box">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="80px"
      class="demo-ruleForm"
    >
      <h2>后台管理系统</h2>
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
          show-password
        />
      </el-form-item>
      <el-form-item>
        <el-button
          class="login-btn"
          type="primary"
          @click="submitForm(ruleFormRef)"
          >登录</el-button
        >
        <el-button class="login-btn" @click="resetForm(ruleFormRef)"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
import { LoaginData } from "../type/login";
import { useRouter } from "vue-router";
import type { FormInstance } from "element-plus";
import { login } from "../request/api";

export default defineComponent({
  name: "LoginView",
  setup() {
    const state = reactive(new LoaginData());
    const rules = {
      username: [
        { required: true, message: "请输入账号", trigger: "blur" },
        {
          min: 3,
          max: 10,
          message: "账号的长度在3到10之间",
          trigger: "blur",
        },
      ],
      password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        {
          min: 3,
          max: 10,
          message: "密码的长度在3到10之间",
          trigger: "blur",
        },
      ],
    };
    // 定义泛型
    const ruleFormRef = ref<FormInstance>();
    // 配置路由
    const router = useRouter(); // =>$router
    // 重置
    const resetForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.resetFields();
    };
    // 提交
    const submitForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.validate((valid) => {
        if (valid) {
          // 接口有问题暂时先这样跳转
          router.push("/");
          login(state.ruleForm).then((res) => {
            console.log("res", res);
            localStorage.setItem("token", res.data.token || "fsafsagsasg");
            // 跳转页面
            router.push("/");
          });
        } else {
          console.log("error submit!");
          return false;
        }
      });
    };
    return {
      ...toRefs(state),
      rules,
      ruleFormRef,
      resetForm,
      submitForm,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-box {
  width: 100vw;
  height: 100%;
  overflow: hidden;
  background-size: 100% 100%;
  text-align: center;
  box-sizing: border-box;
  background-image: url("../assets/logo.jpg");
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .demo-ruleForm {
    width: 500px;
    background: transparent;
    padding: 30px;
    border-radius: 30px;
    .login-btn {
      width: 48%;
    }
    h2 {
      margin-bottom: 20px;
    }
  }
}
</style>