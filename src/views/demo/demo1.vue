<template>
  <div class="app-container">
    <el-card shadow="hover" style="margin-bottom: 20px">
      <div class="nil-header-container">
        <div class=""><span>COMPONENT - OK</span></div>
        <div class=""></div>
      </div>

      <el-button type="success" size="default" @click="showOK('success')"
        >操作成功</el-button
      >
      <el-button type="warning" size="default" @click="showOK('warning')"
        >操作警告</el-button
      >
      <el-button type="info" size="default" @click="showOK('info')"
        >操作提示</el-button
      >
      <el-button type="danger" size="default" @click="showOK('error')"
        >操作失败</el-button
      >
    </el-card>

    <el-card shadow="hover">
      <div class="nil-header-container">
        <div class=""><span>COMPONENT - AXIOS</span></div>
        <div class=""></div>
      </div>
      <el-button
        type="primary"
        size="default"
        :loading="loading.get"
        @click="ajax('get')"
        >GET 请求</el-button
      >
      <el-button
        type="primary"
        size="default"
        :loading="loading.post"
        @click="ajax('post')"
        >POST 请求</el-button
      >
    </el-card>

    <ok
      v-model="show"
      :icon="ok.icon"
      :title="ok.title"
      :sub-title="ok.subTitle"
      @close="handleClose"
    />
  </div>
</template>

<script>
import ok from '@/components/OK.vue'
import { ElMessage } from 'element-plus'
import { API_GET, API_POST } from '@/api/index'
import { DEMO_API_GET, DEMO_API_POST } from '@/api/api'

export default {
  data() {
    return {
      show: false,
      ok: {
        icon: 'success',
        title: '操作成功',
        subTitle: '',
      },
      loading: { get: false, post: false },
    }
  },
  components: {
    ok,
  },
  methods: {
    ajax(type) {
      switch (type) {
        case 'get':
          this.loading.get = true
          API_GET(DEMO_API_GET)
            .then((res) => {
              console.log('[ res ] >', res)
              if (res.success) {
                ElMessage(res.data.message)
              }
              this.loading.get = false
            })
            .catch((e) => {
              console.log('[ e ] >', e)
              this.loading.get = false
            })
          break
        case 'post':
          this.loading.post = true
          API_POST(DEMO_API_POST, {
            you: 'ok',
          })
            .then((res) => {
              console.log('[ res ] >', res)
              if (res.success) {
                ElMessage(res.data.message)
              }
              this.loading.post = false
            })
            .catch((e) => {
              console.log('[ e ] >', e)
              this.loading.post = false
            })
          break
      }
    },
    handleClose() {
      ElMessage({
        showClose: true,
        message: '弹窗已关闭',
      })
    },
    showOK(type) {
      switch (type) {
        case 'success':
          this.ok.icon = 'success'
          this.ok.title = '操作成功'
          break
        case 'warning':
          this.ok.icon = 'warning'
          this.ok.title = '操作警告'
          break
        case 'info':
          this.ok.icon = 'info'
          this.ok.title = '操作提示'
          break
        case 'error':
          this.ok.icon = 'error'
          this.ok.title = '操作失败'
          break

        default:
          this.ok.icon = 'info'
          this.ok.title = '操作提示'
          this.ok.subTitle = '类型不符合'
          break
      }
      this.show = true
    },
  },
}
</script>

<style scoped></style>
