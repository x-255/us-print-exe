<template>
  layout
  <p>{{ isLogin }}</p>
  <el-button type="primary" @click="handleLogin">Primary</el-button>
  <div class="flex"></div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@renderer/store/login'
import { storeToRefs } from 'pinia'

const loginStore = useLoginStore()
const {handleLogin} = loginStore
const {isLogin} = storeToRefs(loginStore)
</script>

<style scoped lang="scss">
</style>