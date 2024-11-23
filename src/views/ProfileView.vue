<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <h1>Profile</h1>
  <button class="btn btn-primary" @click="count++">count is: {{ count }}</button>
</template>

<style></style>
