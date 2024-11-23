<template>
  <div class="matching-results">
    <h2>Abgleich erfolgreich!</h2>
    <div class="greeting">
      <p>Die folgenden Studenten passen gut zu dem Profil von {{ senior.name }}!</p>
    </div>
    <div class="group">
      <ul>
        <li v-for="student in sortedStudents" :key="student.name" class="student-profile" @mouseover="hover = student.id" @mouseleave="hover = null" @click="openMatched(student.name)">
          <div class="profile-details">
            <h4>
              {{ student.name }} -
              <span :class="getMatchClass(student.matchPercentage(senior))">{{
                getMatchText(student.matchPercentage(senior))
              }}</span>
            </h4>
            <p><strong>Alter: </strong> {{ student.age }}</p>
            <p><strong>Studienfach:</strong> {{ student.fieldOfStudy }}</p>
            <p>
              <strong>Bevorzugter Standort: </strong>
              <span :class="{ 'preferred-location': student.preferredLocation === 'Schwabing' }">{{
                student.preferredLocation
              }}</span>
            </p>
            <p>
              <strong>Raucher: </strong>
              <span :class="{ 'no-smoking': student.smoker && !senior.allowSmokers }">{{
                student.smoker ? 'Ja' : 'Nein'
              }}</span>
            </p>
            <p><strong>Hobbys: </strong> {{ student.hobbies.join(', ') }}</p>
            <p><strong>Bietet: </strong></p>
            <ul class="dot-list">
              <li v-for="offer in sortedOffers(student.offers)" :key="offer">
                <span :class="{ match: senior.wishes.includes(offer as TaskType) }">{{
                  offer
                }}</span>
              </li>
            </ul>
            <p><strong>Wünsche: </strong></p>
            <ul class="dot-list">
              <li v-for="wish in sortedWishes(student.wishes)" :key="wish">
                <span :class="{ match: senior.offers.includes(wish as StudentWishType) }">{{
                  wish
                }}</span>
              </li>
            </ul>
          </div>
          <img :src="student.image" alt="Profile Image" class="profile-image" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { seniors } from '../data/data'
import { TaskType } from '@/types/TaskType'
import { StudentWishType } from '@/types/StudentWishType'
import { usePeople } from '@/stores/PeopleStore'
import { Senior } from '@/types/Senior'

import { useRouter } from 'vue-router'
import { useMatchStore } from '@/store/matchStore'

const people = usePeople()

const senior = people.$state.seniors[0]

const sortedStudents = people.$state.students
  .slice()
  .filter((student) => student.matchPercentage(senior) >= 15)
  .sort((a, b) => {
    return b.matchPercentage(senior) - a.matchPercentage(senior)
  })

const getMatchText = (percentage: number) => {
  if (percentage >= 65) return 'Sehr gute Übereinstimmung'
  if (percentage >= 50) return 'Gute Übereinstimmung'
  if (percentage >= 15) return 'Etwas Übereinstimmung'
  return 'Wenig Übereinstimmung'
}

const getMatchClass = (percentage: number) => {
  if (percentage >= 65) return 'very-good-match'
  if (percentage >= 50) return 'good-match'
  if (percentage >= 15) return 'some-match'
  return 'low-match'
}

const sortedOffers = (offers: string[]) => {
  return offers.slice().sort((a, b) => {
    const aMatch = senior.wishes.includes(a as TaskType)
    const bMatch = senior.wishes.includes(b as TaskType)
    return aMatch === bMatch ? 0 : aMatch ? -1 : 1
  })
}

const sortedWishes = (wishes: string[]) => {
  return wishes.slice().sort((a, b) => {
    const aMatch = senior.offers.includes(a as StudentWishType)
    const bMatch = senior.offers.includes(b as StudentWishType)
    return aMatch === bMatch ? 0 : aMatch ? -1 : 1
  })
}

const generateContract = () => {
  console.log('Generating a new contract...')
  // Add logic to generate a new contract here
}

const hover = ref<number | null>(null)
const router = useRouter()
const matchStore = useMatchStore()

const openMatched = (studentName: string) => {
  matchStore.setStudentName(studentName)
  router.push({ name: 'Matched' })
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
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.student-profile:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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

h3,
h4 {
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

.no-smoking {
  color: red;
}

.generate-contract-button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
}

.generate-contract-button:hover {
  background-color: #0056b3;
}

.preferred-location {
  font-weight: bold;
  color: darkgreen;
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
