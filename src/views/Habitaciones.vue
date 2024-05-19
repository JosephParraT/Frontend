<template>
  <div>
    <h2>Listado de Habitaciones</h2>
    <ul>
      <li v-for="habitacion in habitaciones" :key="habitacion.id">
        {{ habitacion.numero }} - {{ habitacion.tipo }} - {{ habitacion.precio_por_noche }} - {{ habitacion.estado }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      habitaciones: [] // Aquí puedes almacenar la lista de habitaciones que obtienes de la API
    };
  },
  mounted() {
    // Aquí puedes hacer una llamada a la API para obtener la lista de habitaciones
    // Por ejemplo, utilizando Axios: axios.get('/api/habitaciones').then(response => { this.habitaciones = response.data; });
  }
};
</script>

<style>
/* Estilos opcionales para el componente de Habitaciones */
</style>