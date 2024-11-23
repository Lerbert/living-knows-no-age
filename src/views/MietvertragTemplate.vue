
<template>
  <div class="rental-contract-template">
    <h1>Mietvertrag</h1>
    <p><strong>Zwischen:</strong></p>
    <p>Vermieter: [Name des Vermieters]</p>
    <p>Mieter: [Name des Mieters]</p>
    
    <h2>Vertragsdetails</h2>
    <p><strong>Adresse der Mietwohnung:</strong> [Adresse]</p>
    <p><strong>Beginn des Mietverhältnisses:</strong> [Datum]</p>
    <p><strong>Mietdauer:</strong> [Dauer]</p>
    <p><strong>Miete:</strong> [Betrag] € pro Monat</p>
    <p><strong>Nebenkosten:</strong> [Betrag] € pro Monat</p>
    <p><strong>Kaution:</strong> [Betrag] €</p>
    
    <h2>Pflichten des Mieters</h2>
    <ul>
      <li>Regelmäßige Zahlung der Miete und Nebenkosten</li>
      <li>Pfleglicher Umgang mit der Mietsache</li>
      <li>Einhaltung der Hausordnung</li>
      <li>Informieren des Vermieters bei Schäden</li>
    </ul>
    
    <h2>Pflichten des Vermieters</h2>
    <ul>
      <li>Bereitstellung der Mietsache in einem bewohnbaren Zustand</li>
      <li>Durchführung notwendiger Reparaturen</li>
      <li>Wahrung der Privatsphäre des Mieters</li>
    </ul>
    
    <h2>Kündigung</h2>
    <p>Die Kündigungsfrist beträgt [Frist] Monate.</p>
    
    <h2>Sonstige Vereinbarungen</h2>
    <p>[Weitere Vereinbarungen]</p>
    
    <h2>Unterschriften</h2>
    <p><strong>Vermieter:</strong> ___________________________</p>
    <p><strong>Mieter:</strong> ___________________________</p>
  </div>
</template>

<script setup lang="ts">
// No script needed for static template
</script>

<style scoped>
.rental-contract-template {
  padding: 2rem;
  font-family: Arial, sans-serif;
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