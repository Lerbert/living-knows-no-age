<template>
  <div class="form-container">
    <h2>Registrierung für Wohnraumsuchende</h2>
    <form @submit.prevent="submitForm">
      <div v-if="currentStage === Stage.PersonalData">
        <h3>Persönliche Daten</h3>
        <div class="form-group row">
          <label for="name" class="form-label">Name</label>
          <div class="">
            <input type="text" class="form-control" id="name" v-model="answers.name" />
          </div>
        </div>
        <div class="form-group row">
          <label for="phone" class="form-label">Telefon</label>
          <div class="">
            <input type="text" class="form-control" id="phone" v-model="answers.phone" />
          </div>
        </div>
        <div class="form-group row">
          <label for="birthday" class="form-label">Geburtstag</label>
          <div class="">
            <input type="date" class="form-control" id="birthday" v-model="answers.birthday" />
          </div>
        </div>
        <div class="form-group row">
          <label for="location" class="form-label">Bevorzugter Standort</label>
          <div class="">
            <Dropdown
              v-model="answers.preferredLocation"
              id="location"
              :placeholder="'Bitte wählen Sie'"
              :options="locations"
              :disabled="false"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="nationality" class="form-label">Nationalität</label>
          <div class="">
            <Dropdown
              v-model="answers.nationality"
              id="nationality"
              :placeholder="'Bitte wählen Sie'"
              :options="nationalities"
              :disabled="false"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="student" class="form-label">Studienfach</label>
          <div class="">
            <Dropdown
              v-model="answers.fieldOfStudy"
              id="student"
              :placeholder="'Bitte wählen Sie'"
              :options="fachrichtungen"
              :disabled="false"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="phone" class="form-label">Hobbies</label>
          <div class="">
            <input type="text" class="form-control" id="phone" v-model="answers.hobbies" />
          </div>
        </div>
        <div class="form-group row">
          <YesNo id="raucher" title="Sind Sie Nichtraucher?" v-model="answers.nonsmoker" />
        </div>
        <button type="button" class="btn btn-primary" @click="currentStage = Stage.Tasks">
          Weiter
        </button>
      </div>
      <div v-if="currentStage === Stage.Tasks">
        <h3>Hilfeleistungen, die Sie anbieten können</h3>
        <div class="form-group row" v-for="task in Object.values(TaskType)" :key="task">
          <YesNo :id="task" :title="task" v-model="answers.offers[task]" />
        </div>
        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="currentStage = Stage.PersonalData"
          >
            Zurück
          </button>
          <button type="button" class="btn btn-primary" @click="currentStage = Stage.Wishes">
            Weiter
          </button>
        </div>
      </div>
      <div v-if="currentStage === Stage.Wishes">
        <h3>Wünsche zur Wohnpartnerschaft</h3>
        <div class="form-group row" v-for="wish in Object.values(StudentWishType)" :key="wish">
          <YesNo :id="wish" :title="wish" v-model="answers.wishes[wish]" />
        </div>
        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="currentStage = Stage.Tasks"
          >
            Zurück
          </button>
          <button type="submit" class="btn btn-primary">Profil anlegen</button>
        </div>
      </div>
    </form>
  </div>
  <!-- {{ answers }} -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dropdown from './fields/Dropdown.vue'
import YesNo from './fields/YesNo.vue'
import { StudentWishType } from '@/types/StudentWishType'
import { TaskType } from '@/types/TaskType'
import { usePeople } from '@/stores/PeopleStore'
import { Student } from '@/types/Student'
import DefaultImage from '@/images/default.jpg'
import { useRouter } from 'vue-router'

interface Answer {
  name: string | null
  phone: string | null
  birthday: string | null
  fieldOfStudy: string | null
  preferredLocation: string | null
  nationality: string | null
  nonsmoker: boolean | null
  hobbies: string | null
  offers: Record<TaskType, boolean | null>
  wishes: Record<StudentWishType, boolean | null>
}

enum Stage {
  PersonalData,
  Tasks,
  Wishes,
}

let currentStage = ref<Stage>(Stage.PersonalData)

const locations = ['Schwabing', 'Haidhausen', 'Maxvorstadt', 'Garching']

const nationalities = [
  'Deutsch',
  'Österreichisch',
  'Schweizerisch',
  'Französisch',
  'Italienisch',
  'Spanisch',
  'Portugiesisch',
  'Niederländisch',
  'Belgisch',
  'Luxemburgisch',
  'Dänisch',
  'Schwedisch',
  'Norwegisch',
  'Finnisch',
  'Polnisch',
  'Tschechisch',
  'Slowakisch',
  'Ungarisch',
  'Rumänisch',
  'Bulgarisch',
  'Griechisch',
  'Türkisch',
].sort()

const fachrichtungen = [
  'Informatik',
  'BWL',
  'Maschinenbau',
  'Lebensmitteltechnologie',
  'Biologie',
  'Chemie',
  'Medizin',
].sort()

const answers = ref<Answer>({
  name: null,
  phone: null,
  birthday: null,
  fieldOfStudy: null,
  preferredLocation: null,
  nationality: null,
  nonsmoker: null,
  hobbies: null,
  offers: Object.values(TaskType).reduce((acc, task) => {
    acc[task] = false
    return acc
  }, {} as Record<TaskType, boolean>),
  wishes: Object.values(StudentWishType).reduce((acc, wish) => {
    acc[wish] = false
    return acc
  }, {} as Record<StudentWishType, boolean>),
})

const students = usePeople()

const router = useRouter()

const submitForm = () => {
  const acceptedTasks = Object.entries(answers.value.offers)
    .filter(([, value]) => value === true)
    .map(([key]) => key as TaskType)
  const acceptedWishes = Object.entries(answers.value.wishes)
    .filter(([, value]) => value === true)
    .map(([key]) => key as StudentWishType)
  const student = new Student(
    answers.value.name ?? '',
    answers.value.phone ?? '',
    new Date(answers.value.birthday ?? ''),
    answers.value.fieldOfStudy ?? '',
    answers.value.preferredLocation ?? '',
    answers.value.nationality ?? '',
    !(answers.value.nonsmoker ?? true),
    [answers.value.hobbies ?? ''],
    acceptedTasks,
    acceptedWishes,
    DefaultImage,
  )
  students.addStudent(student)
  router.push('/')
}
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Changed from center to flex-start */
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 2rem;
  box-sizing: border-box;
}

h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #343a40;
}

h3 {
  margin-bottom: 20px;
  font-size: 20px;
  color: #343a40;
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
  margin-bottom: 10px;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #495057;
}

input,
.form-control {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
}
</style>
