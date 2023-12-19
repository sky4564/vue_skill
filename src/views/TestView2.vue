<script setup>
import { computed } from '@vue/reactivity'
import { ref } from 'vue'
import { useFetch } from '@/composables/fetch'
const page = ref(1)
const url = computed(() => 'https://reqres.in/api/users?page=' + page.value)
const { data, error } = useFetch(url)
</script>

<template>
  <div v-if="error">에러 발생!: {{ error.messsage }}</div>
  <div v-else-if="data">
    <ul>
      <li v-for="item in data" :key="item.id">
        {{ item.email }}
      </li>
    </ul>
    <button @click="page = 1">1</button>
    <button @click="page = 2">2</button>
  </div>
  <div v-else>Loading...</div>
</template>
