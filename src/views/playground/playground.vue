<template>
  <div>
    playground
    {{ num1 }}
    -
    {{ num2 }}
    -
    {{ num3.count }}
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, readonly } from 'vue'

let num1 = 10
let num2 = ref(10)
let num3 = reactive({count: 100})
console.log(num1)
console.log(num2)
console.log(num3)

// function reactive<T extends object>(target: T): UnwrapNestedRefs<T>

const count = ref(1)
const obj = reactive({ count })

// ref 会被解包
console.log(obj, obj.count, count.value === obj.count)

// 会更新  `obj.count`
count.value++
console.log(count.value)
console.log(obj.count)


// 也会更新 `count` ref
obj.count++
console.log(obj.count)
console.log(count.value)


/* const count1 = ref(1)
const obj1 = reactive({ count })

obj1.count = count1

console.log(obj1.count)

console.log(obj.count === count.value)

const raw = {
  count: ref(123)
}

const copy = readonly(raw)

console.log(raw.count.value)
console.log(copy.count) */


</script>