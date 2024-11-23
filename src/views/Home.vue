<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white">
    <h1 class="text-5xl font-bold mb-8">Willkommen zu Wohnungsinserate</h1>
    <p class="text-lg mb-12 max-w-lg text-center">
      Finden Sie Ihr perfektes Zuhause! Loggen Sie sich ein oder registrieren
      Sie sich, um Inserate anzusehen.
    </p>
    <div class="flex space-x-4">
      <router-link
        to="/login"
        class="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition-transform transform hover:-translate-y-1"
      >
        Login
      </router-link>
      <router-link
        to="/register"
        class="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition-transform transform hover:-translate-y-1"
      >
        Registrieren
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>