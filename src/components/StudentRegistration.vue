<template>
  <div>
    <h2>Student Registration</h2>
    <form @submit.prevent="registerStudent">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="age">Age:</label>
        <input type="number" id="age" v-model="age" required />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const name = ref('')
const email = ref('')
const age = ref<number | null>(null)

const registerStudent = () => {
  console.log('Student Registered:', { name: name.value, email: email.value, age: age.value })
}

onMounted(() => {
  console.log('StudentRegistration component has been mounted')
})
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-weight: bold;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>