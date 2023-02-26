<template>
  <div>
    商品列表
    <div class="query-box">
      <el-form :inline="true" :model="selectDate" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="selectDate.title" placeholder="请输入关键字" />
        </el-form-item>
        <el-form-item label="详情">
          <el-input v-model="selectDate.introduce" placeholder="请输入关键字" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询{{ list }}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import { getGoodsList } from "../request/api";
import { IntData } from "../type/goods";
import { toRefs, reactive } from "vue";
// 获取用户列表
// getGoodsList().then((res) => {
//   console.log("res", res);
// });
const state = reactive(new IntData());
const { list, selectDate } = toRefs(state);

const onSubmit = () => {
  console.log("查询1", selectDate.value.count);
  // console.log('查询',selectDate.list ,Object.prototype.toString.call(selectDate.list));
};
</script>
  