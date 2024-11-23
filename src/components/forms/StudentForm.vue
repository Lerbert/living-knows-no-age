<template>
  <div class="form-container">
    <h1>Registrierung für Wohnraumsuchende</h1>
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
          <YesNoText
            id="student"
            title="Studieren Sie derzeit?"
            :options="fachrichtungen"
            placeholder="Fachrichtung"
            v-model="answers.student"
          />
        </div>
        <div class="form-group row">
          <YesNo id="raucher" title="Rauchen Sie?" v-model="answers.raucher" />
        </div>
        <div class="form-group row">
          <label for="phone" class="form-label">Hobbies</label>
          <div class="">
            <input type="text" class="form-control" id="phone" v-model="answers.hobbies" />
          </div>
        </div>
        <button type="button" class="btn btn-primary" @click="currentStage = Stage.Tasks">
          Weiter
        </button>
      </div>
      <div v-if="currentStage === Stage.Tasks">
        <h3>Hilfeleistungen, die Sie anbieten können</h3>
        <div class="form-group row" v-for="task in Object.values(TaskType)" :key="task">
          <YesNo :id="task" :title="task" v-model="answers.tasks[task]" />
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
  {{ answers }}
</template>

<script setup lang="ts">
import { ref } from 'vue'
import YesNoText from './fields/YesNoText.vue'
import Dropdown from './fields/Dropdown.vue'
import YesNo from './fields/YesNo.vue'
import { StudentWishType } from '@/types/StudentWishType'
import { TaskType } from '@/types/TaskType'
import { useStudents } from '@/stores/StudentStore'
import { Student } from '@/types/Student'

interface Answer {
  name: string | null
  phone: string | null
  birthday: Date | null
  nationality: string | null
  student: string | null
  raucher: boolean | null
  hobbies: string | null
  tasks: Record<TaskType, boolean | null>
  wishes: Record<StudentWishType, boolean | null>
}

enum Stage {
  PersonalData,
  Tasks,
  Wishes,
}

let currentStage = ref<Stage>(Stage.PersonalData)

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
  'Russisch',
  'Ukrainisch',
  'Chinesisch',
  'Japanisch',
  'Koreanisch',
  'Indisch',
  'Pakistanisch',
  'Afghanisch',
  'Iranisch',
  'Irakisch',
  'Syrisch',
  'Libanesisch',
  'Israelisch',
  'Ägyptisch',
  'Marokkanisch',
  'Tunesisch',
  'Algerisch',
  'Kanadisch',
  'Amerikanisch',
  'Mexikanisch',
  'Brasilianisch',
  'Argentinisch',
  'Chilenisch',
  'Australisch',
  'Neuseeländisch',
]

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
  nationality: null,
  raucher: null,
  student: null,
  birthday: null,
  hobbies: null,
  tasks: {} as Record<TaskType, boolean | null>,
  wishes: {} as Record<StudentWishType, boolean | null>,
})

const students = useStudents()

const submitForm = () => {
  const acceptedTasks = Object.entries(answers.value.tasks)
    .filter(([, value]) => value === true)
    .map(([key]) => key)
  const acceptedWishes = Object.entries(answers.value.wishes)
    .filter(([, value]) => value === true)
    .map(([key]) => key)
  const student = new Student(
    answers.value.name ?? '',
    answers.value.phone ?? '',
    answers.value.birthday ?? new Date(),
    'fach',
    'standort',
    answers.value.nationality ?? '',
    answers.value.raucher ?? false,
    [answers.value.hobbies ?? ''],
    acceptedTasks,
    acceptedWishes,
    '',
  )
  students.addStudent(student)
}
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 1600px; /* Increase the maximum width */
  margin: 0 auto; /* Center the container */
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
