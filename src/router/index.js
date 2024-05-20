import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from 'src/views/HomeView.vue'  // Asegúrate de que la ruta y el nombre del componente sean correctos
import Habitaciones from '../components/Habitaciones.vue'
import Reservas from '../components/Reservas.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/habitaciones',
    name: 'habitaciones',
    component: Habitaciones
  },
  {
    path: '/reservas',
    name: 'reservas',
    component: Reservas
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router