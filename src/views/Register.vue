<template>
  <div class="register">
    <h1>Registrieren</h1>
    <form @submit.prevent="register">
      <input type="text" v-model="email" placeholder="E-Mail" required />
      <input type="password" v-model="password" placeholder="Passwort" required />
      <button type="submit">Registrieren</button>
    </form>
    <p>Bereits registriert? <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    register() {
      // Dummy-Registrierungs-Logik
      if (this.email && this.password) {
        alert('Registrierung erfolgreich!');
        this.$router.push('/login');
      } else {
        alert('Bitte alle Felder ausfüllen.');
      }
    },
  },
};
</script>
