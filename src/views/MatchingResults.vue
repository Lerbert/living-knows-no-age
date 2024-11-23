<template>
  <div class="matching-results">
    <h2>Abgleich erfolgreich!</h2>
    <div class="greeting">
      <p>Die folgenden Studenten passen gut zu dem Profil von Gertrud!</p>
    </div>
    <div class="group">
      <h3>Studenten</h3>
      <ul>
        <li v-for="student in students" :key="student.id" class="student-profile">
          <div class="profile-details">
            <h4>{{ student.name }} - <span :class="getMatchClass(student.matchPercentage)">{{ getMatchText(student.matchPercentage) }}</span></h4>
            <p><strong>Alter:</strong> {{ student.age }}</p>
            <p><strong>Studienfach:</strong> {{ student.fieldOfStudy }}</p>
            <p><strong>Semester:</strong> {{ student.semester }}</p>
            <p><strong>Bevorzugter Standort:</strong> {{ student.preferredLocation }}</p>
            <p><strong>Hobbys:</strong> {{ student.hobbies.join(', ') }}</p>
            <p><strong>Bietet:</strong></p>
            <ul class="dot-list">
              <li v-for="offer in sortedOffers(student.offers)" :key="offer">
                <span :class="{ match: seniors[0].wishes.includes(offer as TaskType) }">{{ offer }}</span>
              </li>
            </ul>
            <p><strong>Wünsche:</strong></p>
            <ul class="dot-list">
              <li v-for="wish in sortedWishes(student.wishes)" :key="wish">
                <span :class="{ match: seniors[0].offers.includes(wish) }">{{ wish }}</span>
              </li>
            </ul>
          </div>
          <img :src="student.image" alt="Profile Image" class="profile-image" />
        </li>
      </ul>
    </div>
    <div class="registration-link">
      <p>Interessiert? <a href="/student-registration">Hier registrieren</a></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MaximilianBauerImage from '../images/MaximilianBauer.jpg'
import LenaMuellerImage from '../images/LenaMueller.jpg'
import FelixFabelhaftImage from '../images/FelixFabelhaft.jpg'
import { TaskType } from '../types/TaskType'
import { StudentWishType } from '../types/StudentWishType'

const students = ref([
  {
    id: 1,
    name: 'Felix Fabelhaft',
    matchPercentage: 95,
    age: 19,
    fieldOfStudy: 'Architektur',
    semester: '1.',
    preferredLocation: 'Maxvorstadt',
    hobbies: ['Klavier spielen', 'singen', 'wandern'],
    offers: [TaskType.Housework, TaskType.Maintenance, TaskType.Companionship],
    wishes: [StudentWishType.Cook, StudentWishType.Piano],
    image: FelixFabelhaftImage
  },
  {
    id: 2,
    name: 'Lena Müller',
    matchPercentage: 92,
    age: 21,
    fieldOfStudy: 'Informatik',
    semester: '3.',
    preferredLocation: 'Schwabing',
    hobbies: ['programmieren', 'lesen', 'radfahren'],
    offers: [TaskType.ComputerSkills, TaskType.Handicrafts, TaskType.Companionship],
    wishes: [StudentWishType.StudyRoom],
    image: LenaMuellerImage
  },
  {
    id: 3,
    name: 'Maximilian Bauer',
    matchPercentage: 89,
    age: 22,
    fieldOfStudy: 'Maschinenbau',
    semester: '4.',
    preferredLocation: 'Garching',
    hobbies: ['3D-Druck', 'Robotik', 'joggen'],
    offers: [TaskType.Maintenance, TaskType.Gardening, TaskType.Companionship],
    wishes: [StudentWishType.Workshop, StudentWishType.Garden],
    image: MaximilianBauerImage
  },
  {
    id: 4,
    name: 'Sophie Schneider',
    matchPercentage: 87,
    age: 20,
    fieldOfStudy: 'Medizin',
    semester: '2.',
    preferredLocation: 'Haidhausen',
    hobbies: ['ehrenamtliche Arbeit', 'malen', 'Yoga'],
    offers: [TaskType.EscortServices, TaskType.Companionship],
    wishes: [StudentWishType.StudyRoom],
    image: 'https://via.placeholder.com/150'
  }
])

const seniors = ref([
  {
    id: 5,
    name: 'Gertrud Gabel',
    matchPercentage: 80,
    age: 86,
    preferredLocation: 'Schwabing',
    offers: ['Zimmer mit 12m²', 'gelegentliches Kochen für den Studenten'],
    wishes: [TaskType.Housework, TaskType.Maintenance, TaskType.ComputerSkills, TaskType.Companionship]
  }
])

const getMatchText = (percentage: number) => {
  if (percentage >= 90) return 'Sehr gute Übereinstimmung'
  if (percentage >= 75) return 'Gute Übereinstimmung'
  if (percentage >= 50) return 'Etwas Übereinstimmung'
  return 'Wenig Übereinstimmung'
}

const getMatchClass = (percentage: number) => {
  if (percentage >= 90) return 'very-good-match'
  if (percentage >= 75) return 'good-match'
  if (percentage >= 50) return 'some-match'
  return 'low-match'
}

const sortedOffers = (offers: string[]) => {
  return offers.slice().sort((a, b) => {
    const aMatch = seniors.value[0].wishes.includes(a as TaskType)
    const bMatch = seniors.value[0].wishes.includes(b as TaskType)
    return (aMatch === bMatch) ? 0 : aMatch ? -1 : 1
  })
}

const sortedWishes = (wishes: string[]) => {
  return wishes.slice().sort((a, b) => {
    const aMatch = seniors.value[0].offers.includes(a)
    const bMatch = seniors.value[0].offers.includes(b)
    return (aMatch === bMatch) ? 0 : aMatch ? -1 : 1
  })
}

onMounted(() => {
  console.log('MatchingResults component has been mounted')
})
</script>

<style scoped>
.matching-results {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Changed from center to flex-start */
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

.student-profile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-left: 1rem;
}

.profile-details {
  flex: 1;
}

h3, h4 {
  margin: 0;
}

p {
  margin: 0.5rem 0;
}

.very-good-match {
  color: darkgreen;
}

.good-match {
  color: green;
}

.some-match {
  color: orange;
}

.low-match {
  color: red;
}

.greeting {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.registration-link {
  text-align: center;
  margin-top: 2rem;
}

.registration-link a {
  color: #007bff;
  text-decoration: none;
}

.registration-link a:hover {
  text-decoration: underline;
}

.match {
  font-weight: bold;
  color: darkgreen;
}

.dot-list {
  list-style-type: disc;
  padding-left: 1.5rem;
}
</style>

<!-- Name, Vorname
Telefonnummer
Geburtsdatum
Nationalität, Religion

Student/in Ja/Nein
Fachrichtung
Raucher/in

Hobbies/Interessen

Angebotene Tätigkeiten - Enum
Wünsche - Enum

Bild -->