<template>
  <div class="contract-generator">
    <VertragTemplate ref="contractTemplate" class="contract-template" />
    <button @click="downloadContract" class="generate-contract-button">Vertrag herunterladen</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VertragTemplate from './VertragTemplate.vue'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const contractTemplate = ref(null)

const downloadContract = async () => {
  const element = contractTemplate.value.$el
  const canvas = await html2canvas(element, { scale: 2 }) // Increase scale for better quality
  const imgData = canvas.toDataURL('image/png')
  const pdf = new jsPDF('p', 'mm', 'a4')
  const imgProps = pdf.getImageProperties(imgData)
  const pdfWidth = pdf.internal.pageSize.getWidth()
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
  pdf.save('Vertrag.pdf')
}
</script>

<style scoped>
.contract-generator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Align content to the top */
  width: 100%;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

.contract-template {
  width: 100%;
  max-width: 800px; /* Ensure the content fits within a reasonable width */
  margin: 0 auto;
}

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