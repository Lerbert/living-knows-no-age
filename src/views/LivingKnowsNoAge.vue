<template>
  <div class="matched-page">
    <h1 class="title">Living knows no age!</h1>
    <img src="../images/match6.jpg" alt="Match Image" class="match-image" />
    <p class="description">
      Our platform connects students looking for affordable housing with seniors who have extra space. 
      We believe in fostering intergenerational relationships and creating mutually beneficial living arrangements.
    </p>
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
  min-height: 100vh; /* Change height to min-height */
  font-family: Arial, sans-serif;
  padding-top: 2rem; /* Add padding at the top */
  padding-bottom: 4rem; /* Increase padding at the bottom */
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

.description {
  font-size: 1.2rem;
  color: #555;
  margin-top: 1.5rem;
  text-align: center;
  max-width: 600px;
}
</style>