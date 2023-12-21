<!-- src/views/BookDetail.vue -->
<template>
  <div>
    <h2>Book Detail</h2>
    <div v-if="book">
      <h3>{{ book.title }}</h3>
      <p>{{ book.description }}</p>
      <img :src="book.image" :alt="book.title" />
      <router-link :to="{ name: 'EditBook', params: { id: book.id }}">Edit</router-link>
      <button @click="deleteBook(book.id)">Delete</button>
    </div>
    <router-link to="/books">Back to Book List</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: null,
    };
  },
  methods: {
    async deleteBook(bookId) {
      // Dispatch the deleteBook action from the store
      await this.$store.dispatch('deleteBook', bookId);
      // Redirect to the book list page after deletion
      this.$router.push('/books');
    },
  },
  created() {
    // Fetch book details on component creation
    const bookId = this.$route.params.id;
    this.book = this.$store.getters.getBooks.find((book) => book.id == bookId);
    // Implement logic to fetch book details using Vuex actions and Axios if needed
  },
};
</script>
