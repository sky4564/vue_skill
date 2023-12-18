<template>
  마우스 위치: {{ x }}, {{ y }}
</template>

<script setup>
import { useMouse } from '../composables/mouse.js'

const { x, y } = useMouse()
</script>

<style></style>
