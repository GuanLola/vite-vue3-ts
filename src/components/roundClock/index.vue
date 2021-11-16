<template>
  <div class="clock-box">
    <canvas id="clock" width="150" height="150" style="margin-bottom: 10px">
      您的浏览器不兼容canvas
    </canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import draw from "@/utils/roundClock";

onMounted(() => {
  setInterval(draw, 1000);
});
</script>

<style lang="less" scoped>
.clock-box {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  canvas {
    background-color: #fff;
    border-radius: 50%;
  }
}
</style>
