<template>
  <div class="matching-results">
    <h2>Matching Results</h2>
    <div class="group">
      <h3>Students</h3>
      <ul>
        <li v-for="student in students" :key="student.id">
          <h4>{{ student.name }} - {{ student.matchPercentage }}%</h4>
          <p>Age: {{ student.age }}</p>
          <p>Field of Study: {{ student.fieldOfStudy }}</p>
          <p>Semester: {{ student.semester }}</p>
          <p>Preferred Location: {{ student.preferredLocation }}</p>
          <p>Hobbies: {{ student.hobbies.join(', ') }}</p>
          <p>Offers: {{ student.offers.join(', ') }}</p>
          <p>Wishes: {{ student.wishes.join(', ') }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const students = ref([
  {
    id: 1,
    name: 'Felix Fabelhaft',
    matchPercentage: 95,
    age: 19,
    fieldOfStudy: 'Architecture',
    semester: '1st',
    preferredLocation: 'Maxvorstadt',
    hobbies: ['playing the piano', 'singing', 'hiking'],
    offers: ['help with groceries', 'help with special tasks that require agility (climbing on ladders, ...)', 'evening talks'],
    wishes: ['someone willing to occasionally cook for him']
  },
  {
    id: 2,
    name: 'Lena Müller',
    matchPercentage: 92,
    age: 21,
    fieldOfStudy: 'Computer Science',
    semester: '3rd',
    preferredLocation: 'Schwabing',
    hobbies: ['coding', 'reading', 'cycling'],
    offers: ['tech support', 'tutoring in math', 'evening talks'],
    wishes: ['quiet study environment']
  },
  {
    id: 3,
    name: 'Maximilian Bauer',
    matchPercentage: 89,
    age: 22,
    fieldOfStudy: 'Mechanical Engineering',
    semester: '4th',
    preferredLocation: 'Garching',
    hobbies: ['3D printing', 'robotics', 'jogging'],
    offers: ['help with repairs', 'gardening', 'evening talks'],
    wishes: ['space for a small workshop']
  },
  {
    id: 4,
    name: 'Sophie Schneider',
    matchPercentage: 87,
    age: 20,
    fieldOfStudy: 'Medicine',
    semester: '2nd',
    preferredLocation: 'Haidhausen',
    hobbies: ['volunteering', 'painting', 'yoga'],
    offers: ['first aid', 'help with medical appointments', 'evening talks'],
    wishes: ['access to a quiet place for studying']
  }
])

const seniors = ref([
  {
    id: 5,
    name: 'Gertrud Gabel',
    matchPercentage: 80,
    age: 86,
    preferredLocation: 'Schwabing',
    offers: ['small room with 12m²', 'occasionally cook for the student', 'evening talks'],
    wishes: ['help with groceries', 'reaching hard to reach objects', 'help in the garden']
  }
])

onMounted(() => {
  console.log('MatchingResults component has been mounted')
})
</script>

<style scoped>
.matching-results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 2rem;
  box-sizing: border-box;
}

.group {
  margin-bottom: 2rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 0.5rem 0;
  font-size: 1.2rem;
}

h3, h4 {
  margin: 0;
}

p {
  margin: 0.2rem 0;
}
</style>