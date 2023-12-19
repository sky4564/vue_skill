<script setup>

import { ref, isRef, unref, reactive, isProxy } from 'vue'

const Ref = ref('val')
const noRef = 'val'
const test = reactive([1, 2, 3, 4])
// ifRef ref 값인지 판단해줌 returnvalue = true or false

// unref() 쓰면 ref.value 반환 아닐시 value 반환
// val = isRef(val) ? val.value : val 식애 대한 syntactic sugar
// 즉 val = unref(val) 위식과 밑에식이 같음

if (isRef(Ref)) {
  console.log('is Ref', isRef(Ref))
  console.log('is noRef', isRef(noRef))
  console.log('test is ref')
}
console.log('------------------------------------------------')

console.log('ref test')
console.log(Ref)
console.log('noref test')
console.log(unref(noRef))

console.log('------------------------------------------------')

console.log('Proxy test')
console.log(isProxy(test))
console.log(isProxy(Ref))

</script>

<template>
  <div>{{ Ref }}</div>
</template>
