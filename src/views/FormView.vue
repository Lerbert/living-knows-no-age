<template>
  <div class="form-page">
    <h2>Willkommen!</h2>
    <div class="greeting">
      <p>Bitte füllen Sie das Formular aus, um Ihre Präferenzen anzugeben.</p>
    </div>
    <div class="form-container">
      <form class="form-content">
        <!-- Persönliche Angaben -->
        <div class="section">
          <h3>Persönliche Angaben</h3>
          <div class="form-group">
            <label for="name">Name, Vorname</label>
            <input type="text" id="name" v-model="formData.name" placeholder="Name, Vorname" />
          </div>
          <div class="form-group">
            <label for="address">Adresse</label>
            <input type="text" id="address" v-model="formData.address" placeholder="Straße, PLZ, Ort" />
          </div>
          <div class="form-group">
            <label for="phone">Telefonnummer</label>
            <input type="text" id="phone" v-model="formData.phone" placeholder="Telefonnummer" />
          </div>
          <div class="form-group">
            <label for="birthdate">Geburtsdatum</label>
            <input type="date" id="birthdate" v-model="formData.birthdate" />
          </div>
          <div class="form-group">
            <label for="family">Familienstand</label>
            <Dropdown
              v-model="formData.relationship"
              :options="beziehungstypen"
              id="family"
              :placeholder="'Bitte auswählen...'"
            />
          </div>
        </div>

        <!-- Präferenzen -->
        <div class="section">
          <h3>Präferenzen</h3>
          <div class="form-group">
            <label>Raucher/in</label>
            <YesNo id="smoking" title="Rauchen Sie?" v-model="formData.smoking" />
          </div>
          <div class="form-group">
            <label>Haustiere</label>
            <YesNo id="animals" title="Haben Sie Haustiere?" v-model="formData.animals" />
          </div>
          <div class="form-group">
            <label>Hobbys/Interessen</label>
            <textarea v-model="formData.hobbies" placeholder="Hobbys/Interessen"></textarea>
          </div>
        </div>

        <!-- Wohnraumbeschreibung -->
        <div class="section">
          <h3>Wohnraumbeschreibung</h3>
          <div class="form-group">
            <label for="size">Größe des Wohnraums (in m²)</label>
            <input type="text" id="size" v-model="formData.roomsize" placeholder="m²" />
          </div>
          <div class="form-group">
            <label for="rooms">Anzahl der Zimmer</label>
            <input type="text" id="rooms" v-model="formData.rooms" placeholder="1,2,.." />
          </div>
          <div class="form-group">
            <label for="location">Standort der Immobilie</label>
            <input type="text" id="location" v-model="formData.place" placeholder="Schwabing, Ismaning,.." />
          </div>
          <div class="form-group">
            <label for="availability">Verfügbarkeit</label>
            <input type="date" id="availability" v-model="formData.availability" />
          </div>
          <div class="form-group">
            <YesNo id="furniture" title="Ist der Wohnraum möbliert?" v-model="formData.furniture" />
          </div>
        </div>

        <!-- Wohnpartnerschaft -->
        <div class="section">
          <h3>Wohnpartnerschaft</h3>
          <div class="form-group">
            <YesNo id="gender" title="Bevorzugen Sie ein bestimmtes Geschlecht?" v-model="formData.gender" />
          </div>
          <div class="form-group">
          
            <YesNo id="license" title="Ist ein Führerschein notwendig?" v-model="formData.license" />
          </div>
        </div>

        <!-- Tätigkeiten und Wünsche -->
        <div class="section">
          <h3>Angebotene Tätigkeiten</h3>
          <ul class="dot-list">
            <li v-for="(task, index) in tasks" :key="index">
              <label>
                <input type="checkbox" :value="task" v-model="formData.offeredTasks" />
                {{ task }}
              </label>
            </li>
          </ul>
        </div>

        <div class="section">
          <h3>Wünsche</h3>
          <ul class="dot-list">
            <li v-for="(wish, index) in wishes" :key="index">
              <label>
                <input type="checkbox" :value="wish" v-model="formData.desiredWishes" />
                {{ wish }}
              </label>
            </li>
          </ul>
        </div>

        <!-- Absenden -->
        <div class="submit-section">
          <button type="button" @click="submitForm">Formular absenden</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import YesNo from '../components/forms/fields/YesNo.vue';
import Dropdown from '../components/forms/fields/Dropdown.vue';

// Daten für Tätigkeiten, Wünsche und Familienstand
const tasks = ref(['Hausarbeit', 'Gartenarbeit', 'Begleitdienste', 'PC-Kenntnisse', 'Gesellschaft leisten']);
const wishes = ref(['Eigenes Zimmer', 'Kochmöglichkeiten', 'Ruhezeiten', 'Freizeitaktivitäten']);
const beziehungstypen = ['ledig', 'verheiratet', 'verwittwet'].sort();

// Formular-Daten
const formData = ref({
  name: '',
  phone: '',
  address: '',
  birthdate: '',
  relationship: '',
  smoking: '',
  animals: '',
  hobbies: '',
  roomsize: '',
  rooms: '',
  place: '',
  availability: '',
  furniture: '',
  gender: '',
  license: '',
  offeredTasks: [],
  desiredWishes: [],
});

// Formular absenden
const submitForm = () => {
  console.log('Formulardaten:', formData.value);
  alert('Formular erfolgreich abgesendet!');
};
</script>

<style scoped>
.form-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

h2 {
  color: #007bff;
  margin-bottom: 1rem;
}

.greeting {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.form-container {
  width: 100%;
  max-width: 800px;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section h3 {
  color: #000000;
  margin-bottom: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

textarea,
input[type='text'],
input[type='date'] {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

.dot-list {
  list-style-type: none;
  padding-left: 1.5rem;
}

.submit-section {
  text-align: center;
}

button {
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #0056b3;
}
</style>
