<template>
  <div>
    <VertragTemplate ref="contractTemplate" />
    <button @click="downloadContract" class="generate-contract-button">Vertrag herunterladen</button>
    <MietvertragTemplate ref="rentalContractTemplate" />
    <button @click="downloadRentalContract" class="generate-contract-button">Mietvertrag herunterladen</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VertragTemplate from './VertragTemplate.vue'
import MietvertragTemplate from './MietvertragTemplate.vue'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const contractTemplate = ref(null)
const rentalContractTemplate = ref(null)

const downloadContract = async () => {
  const element = contractTemplate.value.$el
  const canvas = await html2canvas(element)
  const imgData = canvas.toDataURL('image/png')
  const pdf = new jsPDF()
  pdf.addImage(imgData, 'PNG', 0, 0)
  pdf.save('Vertrag.pdf')
}

const downloadRentalContract = async () => {
  const element = rentalContractTemplate.value.$el
  const canvas = await html2canvas(element)
  const imgData = canvas.toDataURL('image/png')
  const pdf = new jsPDF()
  pdf.addImage(imgData, 'PNG', 0, 0)
  pdf.save('Mietvertrag.pdf')
}
</script>

<style scoped>
.generate-contract-button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
}

.generate-contract-button:hover {
  background-color: #0056b3;
}
</style>