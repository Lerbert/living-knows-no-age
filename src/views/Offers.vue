<template>
  <!-- Hauptlayout mit CSS Grid -->
  <div class="grid grid-cols-layout min-h-screen">
    <!-- Linke Spalte: Filter -->
    <aside class="bg-blue-100 shadow-md p-6">
      <h2 class="text-lg font-bold mb-4">Filter</h2>
      <form class="space-y-6">
        <!-- Standort -->
        <div>
          <label for="location" class="block text-gray-700 font-medium mb-1">Standort</label>
          <input
            type="text"
            id="location"
            placeholder="z.B. München"
            class="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        <!-- Entfernung -->
        <div>
          <label for="distance" class="block text-gray-700 font-medium mb-1">Entfernung (in km)</label>
          <input
            type="number"
            id="distance"
            placeholder="z.B. 10"
            class="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        <!-- Art der Immobilie -->
        <div>
          <label for="propertyType" class="block text-gray-700 font-medium mb-1">Art der Immobilie</label>
          <select id="propertyType" class="w-full border border-gray-300 rounded-lg px-3 py-2">
            <option value="">Beliebig</option>
            <option value="singleRoom">Einzelzimmer</option>
            <option value="sharedFlat">WG-Zimmer</option>
            <option value="apartment">Wohnung</option>
            <option value="house">Haus</option>
          </select>
        </div>

        <!-- Aufgaben als Gegenleistung -->
        <div>
          <label class="block text-gray-700 font-medium mb-1">Aufgaben als Gegenleistung</label>
          <div class="space-y-2">
            <div>
              <input type="checkbox" id="housework" />
              <label for="housework" class="ml-2 text-gray-600">Hausarbeit</label>
            </div>
            <div>
              <input type="checkbox" id="garden" />
              <label for="garden" class="ml-2 text-gray-600">Gartenpflege</label>
            </div>
            <div>
              <input type="checkbox" id="childcare" />
              <label for="childcare" class="ml-2 text-gray-600">Kinderbetreuung</label>
            </div>
          </div>
        </div>

        <!-- Miethöhe -->
        <div>
          <label for="price" class="block text-gray-700 font-medium mb-1">Preis (in €)</label>
          <div class="flex space-x-2">
            <input
              type="number"
              id="price-min"
              placeholder="Min"
              class="w-1/2 border border-gray-300 rounded-lg px-3 py-2"
            />
            <input
              type="number"
              id="price-max"
              placeholder="Max"
              class="w-1/2 border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>
        </div>

        <!-- Möbliert -->
        <div>
          <input type="checkbox" id="furnished" />
          <label for="furnished" class="ml-2 text-gray-600">Möbliert</label>
        </div>

        <!-- Gemeinschaftsangebote -->
        <div>
          <label class="block text-gray-700 font-medium mb-1">Gemeinschaftsangebote</label>
          <div class="space-y-2">
            <div>
              <input type="checkbox" id="cooking" />
              <label for="cooking" class="ml-2 text-gray-600">Gemeinsames Kochen</label>
            </div>
            <div>
              <input type="checkbox" id="learning" />
              <label for="learning" class="ml-2 text-gray-600">Gemeinsames Lernen</label>
            </div>
            <div>
              <input type="checkbox" id="sports" />
              <label for="sports" class="ml-2 text-gray-600">Sportaktivitäten</label>
            </div>
          </div>
        </div>

        <!-- Suchen Button -->
        <button
          type="submit"
          class="w-full bg-blue-500 text-white font-semibold rounded-lg py-2 hover:bg-blue-600 transition"
        >
          Suchen
        </button>
      </form>
    </aside>

    <!-- Rechte Spalte: Ergebnisse -->
    <main class="bg-green-100 p-6">
      <h2 class="text-2xl font-bold mb-6 text-center">Ergebnisse</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Beispiel-Ergebnisse -->
        <div
          v-for="offer in offers"
          :key="offer.id"
          class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img
            :src="offer.image"
            :alt="offer.title"
            class="h-48 w-full object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-bold text-gray-800">{{ offer.title }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ offer.description }}</p>
            <p class="text-blue-500 font-semibold text-lg">{{ offer.price }} €</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Beispiel-Daten für die Ergebnisse
const offers = ref([
  {
    id: 1,
    title: 'Wohnung 1',
    description: 'Tolle Wohnung in München.',
    price: 1500,
    image: 'https://via.placeholder.com/400x300',
  },
  {
    id: 2,
    title: 'Wohnung 2',
    description: 'Zentral gelegen.',
    price: 1800,
    image: 'https://via.placeholder.com/400x300',
  },
  {
    id: 3,
    title: 'Wohnung 3',
    description: 'Familienfreundlich.',
    price: 2000,
    image: 'https://via.placeholder.com/400x300',
  },
]);
</script>

<style scoped>
/* Grid Layout */
.grid {
  grid-template-columns: 1fr 3fr; /* Linke Spalte 1/4, rechte Spalte 3/4 */
}

aside {
  border-right: 1px solid #e5e7eb;
}

main {
  border-left: 1px solid #e5e7eb;
}
</style>
