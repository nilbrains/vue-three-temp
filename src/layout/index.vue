<template>
  <div class="layout-main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'LayoutMain',
  computed: {
    key() {
      return this.$route.path
    },
  },
  data() {
    return {
    }
  },
}
</script>