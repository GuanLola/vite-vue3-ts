<template>
  <div class="nav">
    <view class="section">
      <router-link v-for="(item, key) in navs" :key="key" :to="item.url">{{ item.name }}</router-link>
    </view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const navs = ref([
      {
        name: '首页',
        url: '/'
      },
      {
        name: '练兵场',
        url: '/playground'
      }
    ])

    return {
      navs
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';
.nav {
  width: 100%;
  height: 60px;
  background-color: #fff;
  margin: auto;
  position: fixed;
  z-index: 1;
  
  .section {
    width: 980px;
    height: 60px;
    display: flex;
    align-items: center;
    margin: auto;
    text-align: center;
    color: #909090;
    font-size: 14px;
    cursor: pointer;
    
    a {
      display: inline-block;
      padding: 0 20px;
      height: 60px;
      line-height: 60px;
      color: $text-gray;
      position: relative;
      &::before {
        position: absolute;
        content: '';
        width: 0;
        left: 50%;
        bottom: 0;
        transition: all .3s ease;
        border-bottom: 2px solid $primary;
      }
      &.is-active {
        color: $primary;
        &::before {
          width: 100%;
          left: 0;
          bottom: 0;
          border-bottom: 3px solid $primary;
        }
      }
    }
  }
}
</style>


