<template>
  <div class="contract-generator">
    <VertragTemplate ref="contractTemplate" class="contract-template" />
    <button @click="downloadContract" class="btn btn-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-file-earmark-arrow-down"
        viewBox="0 0 16 16"
      >
        <path
          d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z"
        />
        <path
          d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"
        />
      </svg>
      Vertrag herunterladen
    </button>
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
  height: auto; /* Change height to auto */
  min-height: 100vh; /* Ensure it takes at least the full viewport height */
  padding: 1rem;
  box-sizing: border-box;
  padding-bottom: 2rem; /* Add padding to the bottom */
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
  margin-bottom: 2rem; /* Add margin to the bottom */
}

.generate-contract-button:hover {
  background-color: #0056b3;
}
</style>
