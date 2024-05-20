<template>
  <div>
    <h2>Listado de Reservas</h2>
    <ul>
      <li v-for="reserva in reservas" :key="reserva.id">
        {{ reserva.id }} - {{ reserva.fecha_entrada }} - {{ reserva.fecha_salida }} - {{ reserva.estado }} - {{ reserva.total }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      reservas: [] // Aquí puedes almacenar la lista de reservas que obtienes de la API
    };
  },
  mounted() {
    // Aquí puedes hacer una llamada a la API para obtener la lista de reservas
    // Por ejemplo, utilizando Axios:
    axios.get('/api/reservas')
      .then(response => {
        this.reservas = response.data;
      })
      .catch(error => {
        console.error('Error al obtener las reservas:', error);
      });
  }
};
</script>

<style>
/* Estilos opcionales para el componente de Reservas */
</style>