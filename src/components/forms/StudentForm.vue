<template>
  <div>
    <h1>Student Form</h1>
    <form @submit.prevent="submitForm">
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

interface Question {
  id: string
  title: string
  options: string[]
  placeholder: string
}

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
    {} as Record<string, string | null>,
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
