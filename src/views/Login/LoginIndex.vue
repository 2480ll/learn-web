<script setup lang="ts">
import { useCache, CACHE_KEY } from '@/hooks/web/useCache'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
const { wsCache } = useCache()
// 登陆数据
const loginFrom = ref<{ name: string; password: string }>({ name: '', password: '' })
const loginRules = reactive<FormRules<{ name: string; password: string }>>({
  name: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
// Elform的实例
const loginRef = ref<FormInstance>()
// 路由
const router = useRouter()
// 登录
const submit = async () => {
  if (!loginRef.value) return
  await loginRef.value.validate((valid, fields) => {
    if (valid) {
      ElMessage.success('登录成功')
      wsCache.set(CACHE_KEY.TOKEN, '123123123')
      router.push('/')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>
<template>
  <div class="login-index">
    <el-form ref="loginRef" :model="loginFrom" :rules="loginRules" label-width="auto" status-icon>
      <el-form-item label="账号" prop="name">
        <el-input v-model="loginFrom.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="loginFrom.password"
          style="width: 240px"
          type="password"
          placeholder="Please input password"
          show-password
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="w-full" @click="submit">
          登陆 <Icon icon="ep:right" color="#fff"
        /></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped lang="scss">
.login-index {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
