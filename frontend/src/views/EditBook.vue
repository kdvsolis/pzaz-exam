<!-- src/views/EditBook.vue -->
<template>
  <div>
    <h2>Edit Book</h2>
    <form @submit.prevent="editBook">
      <label for="title">Title:</label>
      <input type="text" v-model="title" required />
      <label for="description">Description:</label>
      <textarea v-model="description" required></textarea>
      <label for="image">Image URL:</label>
      <input type="text" v-model="image" required />
      <button type="submit">Save Changes</button>
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
    async editBook() {
      const updatedBook = {
        title: this.title,
        description: this.description,
        image: this.image,
      };

      // Get the book ID from the route params
      const bookId = this.$route.params.id;

      // Dispatch the editBook action from the store
      await this.$store.dispatch('editBook', { id: bookId, book: updatedBook });

      // Redirect to the book list page
      this.$router.push('/books');
    },
    async fetchBookDetails() {
      try {
        // Get the book ID from the route params
        const bookId = this.$route.params.id;

        // Dispatch the action to fetch book details using Vuex
        await this.$store.dispatch('fetchBookDetails', bookId);

        // Update component data with fetched details
        const book = this.$store.getters.getBookDetails;
        this.title = book.title;
        this.description = book.description;
        this.image = book.image;
      } catch (error) {
        console.error('Error fetching book details:', error);
        // Handle error, e.g., show an error message to the user
      }
    },
  },
  created() {
    // Fetch book details on component creation
    this.fetchBookDetails();
  },
};
</script>
