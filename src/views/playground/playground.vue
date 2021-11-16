<template>
  <div>
    <qr-code value="https://www.baidu.com/" :size="150" id="canvasDom"></qr-code>
    

    {{ count }}
    <button @click="addCount">+</button>
    {{ myCount }}
    
    
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const count = ref(0)
const addCount = () => {
  count.value++
  store.commit('increment')
}

const store = useStore()

const myCount = computed(() => store.state.count)
</script>