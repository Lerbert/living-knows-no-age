<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="text" v-model="email" placeholder="E-Mail" required />
      <input type="password" v-model="password" placeholder="Passwort" required />
      <button type="submit">Login</button>
    </form>
    <p>Noch keinen Account? <router-link to="/register">Registrieren</router-link></p>
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
    login() {
      // Dummy-Login-Logik
      if (this.email && this.password) {
        localStorage.setItem('user', JSON.stringify({ email: this.email }));
        this.$router.push('/offers');
      } else {
        alert('Bitte alle Felder ausfüllen.');
      }
    },
  },
};
</script>
