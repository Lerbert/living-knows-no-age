
<template>
  <div class="contract-creation">
    <h2>Vertragserstellung</h2>
    <button @click="generateContract">Vertrag generieren</button>
  </div>
</template>

<script setup lang="ts">
const generateContract = () => {
  alert('Vertrag wurde generiert!');
}
</script>

<style scoped>
.contract-creation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

button {
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>