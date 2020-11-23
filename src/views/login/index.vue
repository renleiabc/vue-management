<!--
 * @Author: abc
 * @Date: 2020-11-09 17:50:52
 * @LastEditors: abc
 * @LastEditTime: 2020-11-10 10:51:25
 * @Description: 登录界面
-->
<template>
  <a-row type="flex" justify="center" align="top">
    <a-col :xs="20" :md="8">
      <h2 class="login-title">后台管理系统</h2>
      <a-form-model
        ref="ruleForm"
        :layout="formInline.layout"
        :rules="rules"
        :model="formInline"
        v-bind="formItemLayout"
      >
        <a-form-model-item label="用户名：" prop="user" ref="user">
          <a-input
            v-model="formInline.user"
            placeholder="用户名请输入:admin or user or creator"
            autocomplete="off"
          >
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item label="密码：" prop="password">
          <a-input
            v-model="formInline.password"
            type="password"
            placeholder="密码请输入:admin or user or creator"
            autocomplete="new-password"
          >
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item
          :wrapper-col="buttonItemLayout.wrapperCol"
          style="text-align: center;"
        >
          <a-button
            type="primary"
            @click="onSubmit"
            html-type="submit"
            :disabled="formInline.user === '' || formInline.password === ''"
          >
            登录
          </a-button>
          <a-button style="margin-left: 10px;" @click="resetForm">
            重置
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-col>
  </a-row>
</template>
<script>
export default {
  data() {
    return {
      allowClear: true,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      formInline: {
        layout: 'horizontal',
        user: '',
        password: ''
      },
      rules: {
        user: [
          {
            required: true,
            message: '用户名请输入:admin or user or creator',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密码请输入:admin or user or creator',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          const formInline = this.formInline;
          formInline.token = this.formInline.user;
          this.$store.dispatch('login', formInline);
          this.$store.dispatch('handleFilterRouter');
          this.$router.push({ path: '/' });
          // alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    }
  },
  computed: {
    formItemLayout() {
      const { layout } = this.formInline;
      return layout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 20 }
          }
        : {};
    },
    buttonItemLayout() {
      const { layout } = this.formInline;
      return layout === 'horizontal'
        ? {
            wrapperCol: { span: 24 }
          }
        : {};
    }
  }
};
</script>
