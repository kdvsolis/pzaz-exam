<!-- src/views/UserLogin.vue -->
<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div>
    <h2>User Login</h2>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" v-model="username" required />
      <label for="password">Password:</label>
      <input type="password" v-model="password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const credentials = {
          username: this.username,
          password: this.password,
        };

        // Dispatch the login action from the store
        await this.$store.dispatch('login', credentials);

        // Redirect to the desired route after successful login
        this.$router.push('/books');
      } catch (error) {
        console.error('Login failed:', error);
        // Handle login error, e.g., show an error message to the user
      }
    },
  },
};
</script>
