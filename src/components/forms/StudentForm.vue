<template>
  <div>
    <h1>Fragebogen WOHNRAUM-SUCHENDE</h1>
    <form @submit.prevent="submitForm">
      <h3>Persönliche Daten</h3>
      <div class="form-group row">
        <label for="name" class="col-sm-3 col-form-label">Name</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="name" v-model="answers.name" />
        </div>
      </div>
      <div class="form-group row">
        <label for="phone" class="col-sm-3 col-form-label">Telefon</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="phone" v-model="answers.phone" />
        </div>
      </div>
      <div class="form-group row">
        <label for="birthday" class="col-sm-3 col-form-label">Geburtstag</label>
        <div class="col-sm-9">
          <input type="date" class="form-control" id="birthday" v-model="answers.birthday" />
        </div>
      </div>
      <div class="form-group row">
        <label for="nationality" class="col-sm-3 col-form-label">Nationalität</label>
        <div class="col-sm-9">
          <Dropdown
            v-model="answers.nationality"
            id="nationality"
            :placeholder="'Bitte wählen Sie'"
            :options="nationalities"
            :disabled="false"
          />
        </div>
      </div>
      <YesNoText
        id="student"
        title="Studieren Sie derzeit?"
        :options="fachrichtungen"
        placeholder="Fachrichtung"
        v-model="answers.student"
      />
      <YesNo id="raucher" title="Rauchen Sie?" v-model="answers.raucher" />
      <!--
      hobbies
      tätigkeiten
      was ist wichtig beim zusammenleben
      -->
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  {{ answers }}
</template>

<script setup lang="ts">
import { ref } from 'vue'
import YesNoText from './fields/YesNoText.vue'
import Dropdown from './fields/Dropdown.vue'
import YesNo from './fields/YesNo.vue'

interface Answer {
  name: string | null
  phone: string | null
  birthday: string | null
  nationality: string | null
  student: string | null
  raucher: boolean | null
}

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
})

const submitForm = () => {
  console.log('Form submitted with answers:', answers.value)
}
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
form {
  display: flex;
  flex-direction: column;
}
form > * {
  margin-bottom: 15px;
}
</style>
