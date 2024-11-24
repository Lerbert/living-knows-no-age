<template>
  <div class="student-registration">
    <SeniorForm />
  </div>
</template>

<script setup lang="ts">
import SeniorForm from './forms/SeniorForm.vue'
</script>

<style scoped>
.student-registration {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 2rem;
  box-sizing: border-box;
}
</style>
