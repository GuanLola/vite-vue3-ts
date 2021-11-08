
<template>
  <div class="block">
    <el-carousel class="color-block" height="150px">
      <el-carousel-item  v-for="item in carouselArr" :key="item">
        <div :style="{ background: item }"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import './index.scss'

export default defineComponent({
  name: 'Carousel',
  setup() {
    const carouselArr = ref(['#C6B3FF', '#C8E01C', '#9FDCB8'])
    return {
      carouselArr
    }
  },
})
</script>
