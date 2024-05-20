<template>
  <div>
    <h2>Agregar Nueva Habitación</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="numero">Número de Habitación:</label>
        <input type="text" id="numero" v-model="habitacion.numero" required>
      </div>
      <div>
        <label for="tipo">Tipo de Habitación:</label>
        <input type="text" id="tipo" v-model="habitacion.tipo" required>
      </div>
      <div>
        <label for="precio">Precio por Noche:</label>
        <input type="number" id="precio" v-model="habitacion.precio_por_noche" required>
      </div>
      <div>
        <label for="estado">Estado:</label>
        <input type="text" id="estado" v-model="habitacion.estado" required>
      </div>
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      habitacion: {
        numero: '',
        tipo: '',
        precio_por_noche: '',
        estado: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes enviar los datos de la habitación al servidor (por ejemplo, mediante Axios) para guardarlos en la base de datos
      console.log('Habitación:', this.habitacion);
      // Luego puedes restablecer los campos del formulario si es necesario
      this.habitacion = {
        numero: '',
        tipo: '',
        precio_por_noche: '',
        estado: ''
      };
    }
  }
};
</script>

<style scoped>
/* Estilos opcionales para el formulario de habitaciones */
</style>