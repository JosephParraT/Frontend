import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router' 
import HomeView from '@/views/HomeView.vue'; 
import Habitaciones from './components/Habitaciones.vue'
import Reservas from './components/Reservas.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/habitaciones', component: Habitaciones },
  { path: '/reservas', component: Reservas }
]

const router = createRouter({  
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')