<template>
  <div class="form-container">
    <h2>Registrierung für Wohnraumgebende</h2>
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
          <label for="location" class="form-label">Standort</label>
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
          <label for="phone" class="form-label">Hobbies</label>
          <div class="">
            <input type="text" class="form-control" id="phone" v-model="answers.hobbies" />
          </div>
        </div>
        <div class="form-group row">
          <YesNo id="raucher" title="Würden Sie Raucher aufnehmen?" v-model="answers.smoker" />
        </div>
        <button type="button" class="btn btn-primary" @click="currentStage = Stage.Tasks">
          Weiter
        </button>
      </div>
      <div v-if="currentStage === Stage.Tasks">
        <h3>Gewünschte Hilfeleistungen</h3>
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
        <h3>Eigenschaften der Wohnung</h3>
        <div class="form-group">
          <label for="size">Größe des Wohnraums (in m²)</label>
          <input type="number" id="size" placeholder="m²" />
        </div>
        <div class="form-group">
          <label for="rooms">Anzahl der Zimmer</label>
          <input type="number" id="rooms" />
        </div>
        <div class="form-group">
          <YesNo id="furniture" title="Ist der Wohnraum möbliert?" />
        </div>
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
  smoker: boolean | null
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
  smoker: null,
  hobbies: null,
  offers: {} as Record<TaskType, boolean | null>,
  wishes: {} as Record<StudentWishType, boolean | null>,
})

const router = useRouter()

const submitForm = () => {
  router.push('/matching-results')
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
