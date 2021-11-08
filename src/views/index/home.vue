<template>
  <div class="home-item">
    <Carousel />
    <Iconbar />
    <Weibo />
  </div>  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Iconbar from './components/Iconbar/index.vue'
import Weibo from './components/Weibo/index.vue'
import Carousel from './components/Carousel/index.vue'

export default defineComponent({
  components: { Iconbar, Weibo, Carousel }
})
</script>
