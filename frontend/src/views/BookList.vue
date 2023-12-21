<!-- src/views/BookList.vue -->
<template>
  <div>
    <h2>Book List</h2>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.title }} - {{ book.description }}
        <router-link :to="{ name: 'BookDetail', params: { id: book.id }}">View</router-link>
        <router-link :to="{ name: 'EditBook', params: { id: book.id }}">Edit</router-link>
        <button @click="deleteBook(book.id)">Delete</button>
      </li>
    </ul>
    <router-link to="/add-book">Add Book</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    books() {
      return this.$store.getters.getBooks;
    },
  },
  methods: {
    async deleteBook(bookId) {
      // Dispatch the deleteBook action from the store
      await this.$store.dispatch('deleteBook', bookId);
    },
  },
  created() {
    // Fetch books on component creation
    this.$store.dispatch('fetchBooks');
  },
};
</script>
