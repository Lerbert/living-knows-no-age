<template>
  <div class="student-registration">
    <StudentForm />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import StudentForm from './forms/StudentForm.vue'

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
    profileImage: profileImage.value ? profileImage.value.name : null,
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
</style>
