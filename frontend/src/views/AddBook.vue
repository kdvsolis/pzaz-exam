<!-- src/views/AddBook.vue -->
<template>
  <div>
    <h2>Add Book</h2>
    <form @submit.prevent="addBook">
      <label for="title">Title:</label>
      <input type="text" v-model="title" required />
      <label for="description">Description:</label>
      <textarea v-model="description" required></textarea>
      <label for="image">Image URL:</label>
      <input type="text" v-model="image" required />
      <button type="submit">Add Book</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      image: '',
    };
  },
  methods: {
    async addBook() {
      const newBook = {
        title: this.title,
        description: this.description,
        image: this.image,
      };

      // Dispatch the addBook action from the store
      await this.$store.dispatch('addBook', newBook);

      // Redirect to the book list page
      this.$router.push('/books');
    },
  },
};
</script>
