<template>
  <HeaderNav />
  <Github />
  <Gitee />
  <RoundClock />
  <qr-code class="qr-code" value="https://github.com/GuanLola" :size="50" id="canvasDom"></qr-code>
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

.qr-code {
  position: fixed;
  right: 0;
  bottom: 0;
}
</style>
