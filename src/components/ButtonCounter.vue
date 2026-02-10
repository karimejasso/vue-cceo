<template>
  <button @click="count++">
    Contador: {{ count }}
  </button>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<style scoped>
button {
  padding: 8px 12px;
}
</style>
