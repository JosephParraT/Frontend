<template>
  <div id="app">
    <header>
      <h1>Sistema de Gestión de Reservas para Hoteles Boutique</h1>
    </header>
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/habitaciones">Habitaciones</router-link>
      <router-link to="/reservas">Reservas</router-link>
      <!-- Agrega más enlaces de navegación según sea necesario -->
    </nav>
    <router-view></router-view>
    <!-- Condición para mostrar AgregarHabitacion solo en la página de lista de habitaciones -->
    <AgregarHabitacion v-if="esPaginaDeHabitaciones" />
  </div>
</template>

<script>
import AgregarHabitacion from './components/AgregarHabitacion.vue';

export default {
  name: 'App',
  components: {
    AgregarHabitacion
  },
  computed: {
    esPaginaDeHabitaciones() {
      // Verifica si la ruta actual coincide con la página de lista de habitaciones
      return this.$route.path === '/habitaciones';
    }
  }
};
</script>

<style>
/* Estilos para el encabezado y la navegación */
header, nav {
  background-color: #333;
  color: #fff;
  padding: 10px;
}

header h1 {
  margin: 0;
}

nav a {
  color: #fff;
  margin-right: 10px;
}

nav a:hover {
  text-decoration: underline;
}
</style>
