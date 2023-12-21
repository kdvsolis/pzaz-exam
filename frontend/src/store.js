import { createStore } from 'vuex';
import axios from './axios';

export default createStore({
  state: {
    user: null,
    books: [],
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    },
    setBookDetails(state, bookDetails) {
      state.bookDetails = bookDetails;
    },
    addBook(state, book) {
      state.books.push(book);
    },
    updateBook(state, updatedBook) {
      const index = state.books.findIndex((book) => book.id === updatedBook.id);
      if (index !== -1) {
        state.books.splice(index, 1, updatedBook);
      }
    },
    deleteBook(state, bookId) {
      state.books = state.books.filter((book) => book.id !== bookId);
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async fetchBooks({ commit }) {
      try {
        const response = await axios.get('books/');
        commit('setBooks', response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    },
    async addBook({ commit }, book) {
      try {
        const response = await axios.post('books/', book);
        commit('addBook', response.data);
      } catch (error) {
        console.error('Error adding book:', error);
      }
    },
    async editBook({ commit }, { id, book }) {
      try {
        const response = await axios.put(`books/${id}/`, book);
        commit('updateBook', response.data);
      } catch (error) {
        console.error('Error editing book:', error);
      }
    },
    async deleteBook({ commit }, bookId) {
      try {
        await axios.delete(`books/${bookId}/`);
        commit('deleteBook', bookId);
      } catch (error) {
        console.error('Error deleting book:', error);
      }
    },
    async login({ commit }, credentials) {
      const response = await axios.post('auth/login/', credentials);
  
      // Save the user data in the store
      commit('setUser', response.data);
  
      // Save the authentication token in local storage or a secure storage mechanism
      localStorage.setItem('token', response.data.token);
    },
    async fetchBookDetails({ commit }, bookId) {
      const response = await axios.get(`books/${bookId}/`);

      // Commit the book details to the store
      commit('setBookDetails', response.data);
    },
  },
  getters: {
    getBooks: (state) => state.books,
    getUser: (state) => state.user,
    isAuthenticated: (state) => state.user !== null,
    getBookDetails: (state) => state.bookDetails,
  },
});
