<template>
  <svg :class="svgClass" :fill="color" v-bind="$attrs" :style="{ fontSize: $props.size + 'px' }">
    <use :href="iconName" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// 定义属性，传递图标名称、颜色和类名
const props = defineProps({
  name: {
    type: String,
    required: true, // 图标名称为必填
  },
  color: {
    type: String,
    default: 'currentColor', // 默认颜色为当前字体颜色
  },
  svgClass: {
    type: String,
    default: '', // 默认没有类名
  },
  size: {
    type: Number,
    defalut: 16, // 默认大小为 16
  }
});
// 计算属性，根据传入的图标名称生成引用的符号 ID
const iconName = computed(() => `#icon-${props.name}`);
</script>
<script lang="ts">
  export default {
    name: 'SytSvg',
  }
</script>
<style scoped>
/* 这里可以添加样式，比如调整 SVG 的大小等 */
svg {
  width: 1em; /* 使图标大小可伸缩 */
  height: 1em;
}
</style>
