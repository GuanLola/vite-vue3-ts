<template>
  <HeaderNav />
  <Github />
  <Gitee />
  <RoundClock />
  <router-view class="router-view" />
</template>

<script lang="ts" setup>
import HeaderNav from '@/components/HeaderNav.vue'
import Github from '@/components/svg/Github.vue'
import Gitee from '@/components/svg/Gitee.vue'
import RoundClock from '@/components/roundClock/index.vue'

</script>

<style lang="scss" scoped>
.router-view {
  width: 980px;
  padding-top: 65px;
  margin: auto;
}
</style>
