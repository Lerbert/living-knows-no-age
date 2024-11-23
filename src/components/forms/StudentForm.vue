<template>
  <div>
    <h1>Fragebogen WOHNRAUM-SUCHENDE</h1>
    <form @submit.prevent="submitForm">
      <h3>Persönliche Daten</h3>
      <div class="form-group row">
        <label for="name" class="col-sm-3 col-form-label">Name, Vorname</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="name" v-model="answers.name" />
        </div>
      </div>
      <div class="form-group row">
        <label for="phone" class="col-sm-3 col-form-label">Telefon/Handy</label>
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
      <!--
      birthday
      nationalität
      student + fachrichtung
      raucher
      hobbies
      tätigkeiten
      was ist wichtig beim zusammenleben
      -->
      <YesNoText
        v-for="question in questions"
        :key="question.id"
        :id="question.id"
        :title="question.title"
        :options="question.options"
        :placeholder="question.placeholder"
        v-model="answers[question.id]"
      />
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  {{ answers }}
</template>

<script setup lang="ts">
import { ref } from 'vue'
import YesNoText from './fields/YesNoText.vue'
import Dropdown from './fields/Dropdown.vue'

interface Question {
  id: string
  title: string
  options: string[]
  placeholder: string
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

const questions: Question[] = [
  {
    id: 'student',
    title: 'Studieren Sie derzeit?',
    options: [
      'Informatik',
      'BWL',
      'Maschinenbau',
      'Lebensmitteltechnologie',
      'Biologie',
      'Chemie',
      'Medizin',
    ].sort(),
    placeholder: 'Fachrichtung',
  },
  {
    id: 'ausbildung',
    title: 'Haben Sie eine Ausbildung abgeschlossen?',
    options: [
      'Klemptner',
      'Elektriker',
      'Maler',
      'Schreiner',
      'Dachdecker',
      'Fliesenleger',
      'Maurer',
      'Tischler',
      'Zimmerer',
      'Bäcker',
      'Fleischer',
    ].sort(),
    placeholder: 'Berufsbezeichnung',
  },
  {
    id: 'nebenjob',
    title: 'Haben Sie einen Nebenjob?',
    options: [
      'Kellner',
      'Softwareentwickler',
      'Reinigungskraft',
      'Verkäufer',
      'Nachhilfelehrer',
    ].sort(),
    placeholder: 'Berufsbezeichnung',
  },
  {
    id: 'wochenende',
    title: 'Fahren Sie regelmäßig am Wochenende nach Hause?',
    options: [],
    placeholder: 'Wochenenden pro Monat',
  },
  {
    id: 'semesterferien',
    title: 'Sind Sie in den Semesterferien weg?',
    options: [],
    placeholder: 'Wochen',
  },
  {
    id: 'einschraenkungen',
    title: 'Gibt es körperliche oder physische Einschränkungen/Behinderungen?',
    options: [],
    placeholder: 'Beschreibung',
  },
]

const answers = ref<Record<string, string | null>>(
  questions.reduce(
    (acc, question) => {
      acc[question.id] = null
      return acc
    },
    { name: null, phone: null, nationality: null } as Record<string, string | null>,
  ),
)

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
