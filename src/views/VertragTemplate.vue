<template>
  <div class="contract-template">
    <h1 class="title">Mietvertrag</h1>
    <h2>Vermieter</h2>
    <p>Gertrud Gabel</p>
    <h2>Mieter</h2>
    <p>Felix Fabelhaft</p>
    <p></p>
    <p>Zwischen dem Mieter und dem Vermieter wird folgender Mietvertrag geschlossen.</p>

    <h2>Mietobjekt</h2>
    <p>
      Ein Zimmer im Anwesen {{ senior.address }} Sowie Mitbenutzung von Küche, Bad und
      Gemeinschaftsraum. Zimmergröße: {{ senior.roomSize }} m² Das Zimmer ist möbliert.
    </p>

    <h2>Nebenkosten</h2>
    <p>
      Die Nebenkosten betragen 80€. In den Nebenkosten ist die Beteiligung an folgenden Kosten
      enthalten:
    </p>
    <p>
      Gas (Heizung, Warmwasser), elektrischer Strom, Wasser, Abwasser, Grundsteuer, Versicherung,
      Kaminkehrer, Wartung der Heizung, Müllentsorgung, W-LAN, Rundfunkgebühr. Der Mieter
      verpflichtet sich mit Heizung, Warmwasser und Strom angemessen sparsam umzugehen.
    </p>

    <h2>Aufgaben des Mieters ({{ senior.roomSize }} h/Monat):</h2>
    <ul>
      <li v-for="offer in matchedOffers" :key="offer">{{ offer }}</li>
    </ul>
    <h2>Angebote des Vermieters:</h2>
    <ul>
      <li v-for="wish in senior.offers" :key="wish">{{ wish }}</li>
    </ul>

    <h2>Kündigung</h2>
    <p>
      Die Kündigungsfrist beträgt 3 Monate. Während der Probezeit, die sich über die ersten vier
      Wochen erstreckt, beträgt die Kündigungsfrist eine Woche.
    </p>

    <h2>Unterschriften</h2>
    <div class="row">
      <div class="col-md-6">
        <p><strong>Vermieter:</strong> ___________________________</p>
      </div>
      <div class="col-md-6">
        <p><strong>Mieter:</strong> ___________________________</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { students, seniors } from '../data/data'

const student = students[0]
const senior = seniors[0]

const matchedOffers = ref(student.offers.filter((offer) => senior.wishes.includes(offer)))

const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' }
  return new Date(date).toLocaleDateString('de-DE', options)
}
</script>

<style scoped>
.contract-template {
  padding: 2rem;
  font-family: Arial, sans-serif;
}

.title {
  text-align: center;
}

h1,
h2 {
  color: #333;
}

ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

p {
  margin: 0.5rem 0;
}
</style>
