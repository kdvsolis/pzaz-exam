// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from './views/Login.vue';
import BookList from './views/BookList.vue';
import AddBook from './views/AddBook.vue';
import EditBook from './views/EditBook.vue';
import BookDetail from './views/BookDetail.vue';


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'BookList',
    component: BookList,
  },
  {
    path: '/add-book',
    name: 'AddBook',
    component: AddBook,
  },
  {
    path: '/edit-book/:id',
    name: 'EditBook',
    component: EditBook,
  },
  {
    path: '/book/:id',
    name: 'BookDetail',
    component: BookDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
