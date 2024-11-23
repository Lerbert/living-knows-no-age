<template>
  <div class="student-registration">
    <h2>Student Registration</h2>
    <form @submit.prevent="registerStudent">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" id="age" v-model="age" required />
      </div>
      <div class="form-group">
        <label for="fieldOfStudy">Field of Study:</label>
        <input type="text" id="fieldOfStudy" v-model="fieldOfStudy" required />
      </div>
      <div class="form-group">
        <label for="semester">Semester:</label>
        <input type="text" id="semester" v-model="semester" required />
      </div>
      <div class="form-group">
        <label for="preferredLocation">Preferred Location:</label>
        <input type="text" id="preferredLocation" v-model="preferredLocation" required />
      </div>
      <div class="form-group">
        <label for="hobbies">Hobbies:</label>
        <input type="text" id="hobbies" v-model="hobbies" required />
      </div>
      <div class="form-group">
        <label for="offers">Offers:</label>
        <input type="text" id="offers" v-model="offers" required />
      </div>
      <div class="form-group">
        <label for="wishes">Wishes:</label>
        <input type="text" id="wishes" v-model="wishes" required />
      </div>
      <div class="form-group">
        <label for="profileImage">Profile Image:</label>
        <input type="file" id="profileImage" @change="handleFileUpload" />
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
const fieldOfStudy = ref('')
const semester = ref('')
const preferredLocation = ref('')
const hobbies = ref('')
const offers = ref('')
const wishes = ref('')
const profileImage = ref<File | null>(null)

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    profileImage.value = target.files[0]
  }
}

const registerStudent = () => {
  console.log('Student Registered:', {
    name: name.value,
    email: email.value,
    age: age.value,
    fieldOfStudy: fieldOfStudy.value,
    semester: semester.value,
    preferredLocation: preferredLocation.value,
    hobbies: hobbies.value,
    offers: offers.value,
    wishes: wishes.value,
    profileImage: profileImage.value ? profileImage.value.name : null
  })
}

onMounted(() => {
  console.log('StudentRegistration component has been mounted')
})
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

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
}

button:hover {
  background-color: #0056b3;
}
</style>