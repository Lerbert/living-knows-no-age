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
            <label for="name">Adresse</label>
            <input type="text" id="adresse" v-model="formData.name" placeholder="Straße, PLZ, Ort" />
          </div>
          <div class="form-group">
            <label for="phone">Telefonnummer</label>
            <input type="text" id="phone" v-model="formData.phone" placeholder="Telefonnummer" />
          </div>
          <div class="form-group">
            <label for="birthdate">Geburtsdatum</label>
            <input type="date" id="birthdate" v-model="formData.birthdate" />
          </div>
          <div class="space-y-4">
          <div class="flex items-center space-x-8">

          <div class="form-group">
            <label for="family">Familienstand</label>
          

            <label class="flex items-center space-x-2">
              <input
                type="radio"
                value="möbliert"
                v-model="furnishing"
                name="furnishing"
                class="form-radio text-blue-500"
              />
              <span>ledig</span>
            </label>
            <label class="flex items-center space-x-2">
              <input
                type="radio"
                value="möbliert"
                v-model="furnishing"
                name="furnishing"
                class="form-radio text-blue-500"
              />
              <span>in Partnerschaft</span>
            </label>

            <label class="flex items-center space-x-2">
              <input
                type="radio"
                value="möbliert"
                v-model="furnishing"
                name="furnishing"
                class="form-radio text-blue-500"
              />
              <span>geschieden</span>
            </label>
            <label class="flex items-center space-x-2">
              <input
                type="radio"
                value="geschieden"
                v-model="geschieden"
                name="geschieden"
                class="form-radio text-blue-500"
              />
              <span>verwittwet</span>
            </label>
          </div>
        </div>
        </div>
      </div>
        <!-- Präferenzen -->
        <div class="section">
          <h3>Präferenzen</h3>
          <div class="form-group">
            <label>Raucher/in</label>
            <div class="radio-group">
              <label>
                <input type="radio" value="ja" v-model="formData.smoking" /> Ja
              </label>
              <label>
                <input type="radio" value="nein" v-model="formData.smoking" /> Nein
              </label>
            </div>
            <label>Haustiere</label>
            <div class="radio-group">
              <label>
                <input type="radio" value="ja" v-model="formData.smoking" /> Ja
              </label>
              <label>
                <input type="radio" value="nein" v-model="formData.smoking" /> Nein
              </label>
            </div>
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
            <div class="form-group">
            <label for="size">Größe des Wohnraums (in m²)</label>
            <input type="text" id="size" v-model="formData.phone" placeholder="m²" />
          </div>
          <div class="form-group">
            <label for="rooms">Anzahl der Zimmer</label>
            <input type="text" id="rooms" v-model="formData.phone" placeholder="1,2,.." />
          </div>
          <div class="form-group">
            <label for="location">Standort der Immobilie</label>
            <input type="text" id="location" v-model="formData.phone" placeholder="Schwabing, Ismaning,.." />
          </div>
          <div class="form-group">
            <label for="availability">Verfügbarkeit</label>
            <input type="date" id="availability" v-model="formData.birthdate" />
          </div>
        </div>
          <label>Möbliert</label>
            <div class="radio-group">
              <label>
                <input type="radio" value="ja" v-model="formData.smoking" /> Ja
              </label>
              <label>
                <input type="radio" value="nein" v-model="formData.smoking" /> Nein
              </label>

            </div>
        </div>




         <!-- Wohnpartnerschaft -->
         <div class="section">
          <h3>Wohnpartnerschaft</h3>

          <div class="form-group"></div>
          <label>Bevorzugtes Geschlecht</label>
            <div class="radio-group">
              <label>
                <input type="radio" value="maennlich" v-model="formData.smoking" /> männlich
              </label>
              <label>
                <input type="radio" value="weiblich" v-model="formData.smoking" /> weiblich
              </label>
              <label>
                <input type="radio" value="egal" v-model="formData.smoking" /> egal
              </label>

            </div>
            <div class="form-group"></div>

            <label>Raucher</label>
            <div class="radio-group">
              <label>
                <input type="radio" value="ja" v-model="formData.smoking" /> Ja
              </label>
              <label>
                <input type="radio" value="nein" v-model="formData.smoking" /> Nein
              </label>
            </div>
            <div class="form-group"></div>

            <label>Führerschein</label>
            <div class="radio-group">
              <label>
                <input type="radio" value="ja" v-model="formData.smoking" /> Ja
              </label>
              <label>
                <input type="radio" value="nein" v-model="formData.smoking" /> Nein
              </label>
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

// Beispiel-Daten für Tätigkeiten und Wünsche
const tasks = ref(['Hausarbeit', 'Gartenarbeit', 'Begleitdienste', 'PC-Kenntnisse', 'Gesellschaft leisten']);
const wishes = ref(['Eigenes Zimmer', 'Kochmöglichkeiten', 'Ruhezeiten', 'Freizeitaktivitäten']);

// Formular-Daten
const formData = ref({
  name: '',
  phone: '',
  birthdate: '',
  nationality: '',
  religion: '',
  smoking: '',
  hobbies: '',
  offeredTasks: [],
  desiredWishes: []
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

.radio-group {
  display: flex;
  gap: 1rem;
}

textarea,
input[type='text'],
input[type='date'] {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
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
