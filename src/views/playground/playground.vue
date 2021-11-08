<template>
  <div>
    playground
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, readonly } from 'vue';

const original = reactive({ count: 0 })

const copy = readonly(original)

console.log(original)
console.log(copy)

original.count++
console.log(original)
console.log(copy)

copy.count++
console.log(original)
console.log(copy)

const raw = {
  count: ref(123)
}

const copy1 = readonly(raw)


</script>