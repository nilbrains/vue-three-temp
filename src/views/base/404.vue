<template>
  <div class="error_page flex-center position-ref full-height">
    <!-- <div class="error_code">404</div> -->
    <div class="error_message" style="padding: 10px">{{ msg || '此页面不存在' }}</div>
  </div>
</template>

<script>
export default {
  name: "error0",
  data() {
    return {
      msg: this.$route.query?.msg ?? "此页面不存在"
    }
  },
};
</script>

<style lang="scss" scoped>

.error_page {
  margin-bottom: 0!important;
}
.full-height {
  height: 100vh;
}

.flex-center {
  align-items: center;
  display: flex;
  justify-content: center;
}

.position-ref {
  position: relative;
}

.error_code {
  border-right: 2px solid;
  font-size: 26px;
  padding: 0 15px 0 15px;
  text-align: center;
  color: #636b6f;
  font-weight: 100;
  font-family: 'Nunito', sans-serif;
}

.error_message {
  font-size: 18px;
  text-align: center;
  color: #636b6f;
  font-weight: 100;
  font-family: 'Nunito', sans-serif;
}

</style>