<template>
  <div>
    <qr-code value="https://www.baidu.com/" :size="150" id="canvasDom"></qr-code>
  </div>
</template>

<script lang="ts">
import QRCodeVue3 from "qrcode-reader-vue3";
console
export default {
  name: "QRCodeVue3Example",
  components: { QRCodeVue3 },
  setup() {
    return {}
  }
}
</script>