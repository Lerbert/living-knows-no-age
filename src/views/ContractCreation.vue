<template>
  <div class="contract-creation">
    <h2>Vertragserstellung</h2>
    <button class="btn btn-primary" @click="generateContract">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-file-text"
        viewBox="0 0 16 16"
      >
        <path
          d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"
        />
        <path
          d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"
        />
      </svg>
      Vertrag generieren
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const generateContract = () => {
  router.push('/contract-generator')
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

/* button {
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
} */
</style>
