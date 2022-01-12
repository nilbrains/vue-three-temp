<template>
  <div class="nil-ok">
    <el-dialog
      :fullscreen="fullscreen"
      :show-close="showClose"
      :width="width"
      v-model="visible"
      @close="$emit('close')"
    >
      <el-result :icon="icon" :title="title" :sub-title="subTitle">
        <template #extra>
          <slot name="extra"></slot>
          <el-button type="primary" @click="ok" v-text="okText"></el-button>
        </template>
      </el-result>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'OK',
  props: {
    modelValue: {
      // 弹窗是否展示
      type: Boolean,
      default: false,
      requare: true,
    },
    width: {
      //弹窗宽度
      type: String,
      default: '30%',
    },
    showClose: {
      type: Boolean,
      default: false,
    },
    fullscreen: {
      type: Boolean,
      default: false,
    },
    icon: {
      //弹窗类型
      type: String,
      default: 'success',
    },
    title: {
      //标题
      type: String,
      default: '成功',
    },
    subTitle: {
      //副标题
      type: String,
      default: '',
    },
    okText: {
      type: String,
      default: '确定',
    },
  },
  computed: {
    visible: {
      get() {
        return this.modelValue
      },
      set() {
        this.$emit('update:modelValue', false)
      },
    },
  },
  methods: {
    ok() {
      this.visible = false
    },
  },
}
</script>
