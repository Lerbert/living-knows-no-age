<template>
  <div class="contract-template">
    <h1 class="title">Mietvertrag</h1>
    <p><strong>Zwischen:</strong></p>
    <p>Senior: Gertrud Gabel</p>
    <p>Student: Felix Fabelhaft</p>
    
    <h2>Vertragsdetails</h2>
    <p><strong>Geburtsdatum der Seniorin:</strong> 23.06.1938</p>
    <p><strong>Geburtsdatum des Studenten:</strong> 15.10.2005</p>
    <p><strong>Hausstandort:</strong> Schwabing</p> <!-- Updated to use actual house location -->
    
    <h2>Übereinstimmende Angebote und Wünsche</h2>
    <p><strong>Angebote des Studenten:</strong></p>
    <ul>
      <li v-for="offer in matchedOffers" :key="offer">{{ offer }}</li>
    </ul>
    <p><strong>Wünsche der Seniorin:</strong></p>
    <ul>
      <li v-for="wish in matchedWishes" :key="wish">{{ wish }}</li>
    </ul>
    
    <h2>Weitere Details</h2>
    <p><strong>Raucher:</strong> Nein</p>
    <p><strong>Hobbys des Studenten:</strong> Klavier spielen, singen, wandern</p>
    
    <h2>Kündigung</h2>
    <p>Die Kündigungsfrist beträgt 3 Monate. Während der Probezeit, die sich über die ersten vier Wochen erstreckt, beträgt die Kündigungsfrist eine Woche.</p>
    
    <h2>Sonstige Vereinbarungen</h2>
    <p>[Weitere Vereinbarungen]</p>
    
    <h2>Unterschriften</h2>
    <p><strong>Senior:\t</strong> ___________________________</p>
    <p><strong>Student:\t</strong> ___________________________</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TaskType } from '../types/TaskType'
import { StudentWishType } from '../types/StudentWishType'

const matchedOffers = ref([
  TaskType.Housework,
  TaskType.Maintenance,
  TaskType.Companionship
])

const matchedWishes = ref([
  StudentWishType.Piano
])
</script>

<style scoped>
.contract-template {
  padding: 2rem;
  font-family: Arial, sans-serif;
}

.title {
  text-align: center;
}

h1, h2 {
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