<template>
  <div class="matched-page">
    <h1 class="title">{{ firstName }} und Gertrud Matched!</h1>
    <img src="../images/match.jpg" alt="Match Image" class="match-image" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMatchStore } from '@/store/matchStore'

const matchStore = useMatchStore()
const studentName = computed(() => matchStore.studentName)
const firstName = computed(() => studentName.value.split(' ')[0])
</script>

<style scoped>
.matched-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.title {
  font-size: 3rem;
  color: #333;
  margin-bottom: 2rem;
}

.match-image {
  max-width: 100%;
  height: auto;
}
</style>