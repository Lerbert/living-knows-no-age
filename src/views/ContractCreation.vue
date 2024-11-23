<template>
  <div class="contract-creation">
    <h2>Vertragserstellung</h2>
    <button @click="generateContract">Vertrag generieren</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const generateContract = () => {
  router.push('/contract-generator');
}
</script>

<style scoped>
.contract-creation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Align content to the top */
  height: 100vh;
  text-align: center;
  padding: 1rem; /* Add padding to prevent content from being cut off */
  box-sizing: border-box; /* Ensure padding is included in the element's total width and height */
  width: 100%;
}

button {
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>