<!-- src/App.vue -->
<template>
  <div id="app">
    <header>
      <!-- Your header content goes here -->
    </header>

    <nav>
      <!-- Your navigation content goes here -->
      <router-link to="/">Home</router-link>
      <router-link to="/books">Book List</router-link>
      <!-- Add more navigation links as needed -->
    </nav>

    <main>
      <!-- The router-view will render the component associated with the current route -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Add your global styles here */
</style>
