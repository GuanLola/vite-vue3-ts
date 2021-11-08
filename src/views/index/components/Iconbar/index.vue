<template>
  <div class="icon-container">
    <div class="icon-item-flex" v-for="(item, key) in icons" :key="item">
      <div class="icon-item">
        <img class="icon-img" :src="`/src/assets/icon/` + Object.keys(item)[0] + `.png`" alt="icon" />
        <span class="icon-text">{{ Object.values(item)[0] }}</span>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import './index.scss'

const icons = ref<Array<any>>([
  {
    weibo: '微博热搜'
  },
  {
    bilibili: 'Bilibili热榜'
  },
  {
    juejin: '掘金热榜'
  }
])

</script>