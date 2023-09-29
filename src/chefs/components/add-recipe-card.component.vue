<template>
  <form @submit.prevent="enviarReceta">
    <div class="form-group">
      <pv-input-text id="name" placeholder="Nombre" v-model="recipe.name" required/>
    </div>
    <div class="form-group">
      <pv-input-text id="author" placeholder="Autor" v-model="recipe.author" required/>
    </div>
    <div class="form-group">
      <pv-input-text id="image" placeholder="URL de imagen" v-model="recipe.image" required/>
    </div>
    <div class="form-group">
      <pv-textarea id="ingredients" placeholder="Ingredientes" v-model="recipe.ingredients" rows="5" cols="30" required/>
    </div>
    <div class="form-group">
      <pv-textarea id="preparation" placeholder="Preparación" v-model="recipe.preparation" rows="5" cols="30" required/>
    </div>
    <div class="form-group">
      <pv-input-text id="time" placeholder="Tiempo de preparación" v-model="recipe.time" required/>
    </div>
    <div class="form-group">
      <pv-input-text id="servings" placeholder="Porciones" v-model="recipe.servings" required/>
    </div>
    <button type="submit" class="btn btn-primary">Agregar Receta</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  props: {
    recipe: Object, // Propiedad para pasar la receta desde chef-home
  },
  data() {
    return {
      recipe: {
        'id': '',
        'name': '',
        'author': '',
        'image': '',
        'ingredients': '',
        'preparation': '',
        'time': '',
        'servings': ''
      }
    };
  },
  methods: {
    enviarReceta() {
      // Validación de los datos, por ejemplo, asegúrate de que los campos obligatorios no estén vacíos.
      if (!this.recipe.name || !this.recipe.author || !this.recipe.image) {
        alert("Por favor, complete los campos obligatorios.");
        return;
      }

      // Crea un objeto con los datos de la receta para enviar al servidor
      const datosReceta = {
        id: this.recipe.id,
        name: this.recipe.name,
        author: this.recipe.author,
        image: this.recipe.image,
        ingredients: this.recipe.ingredients.split(','), // Convierte los ingredientes en un array
        preparation: this.recipe.preparation,
        time: this.recipe.time,
        servings: this.recipe.servings
      };

      // Realiza una solicitud HTTP POST a la URL del servidor
      axios.post('http://localhost:3000/recipes', datosReceta)
          .then(response => {
            // Maneja la respuesta del servidor aquí, si es necesario
            console.log('Receta enviada con éxito:', response.data);

            // Luego, puedes restablecer el formulario o realizar otras acciones después del envío
            this.resetearFormulario();
          })
          .catch(error => {
            // Maneja los errores de la solicitud aquí
            console.error('Error al enviar la receta:', error);
          });
    },
    resetearFormulario() {
      // Aquí puedes restablecer los valores del formulario o redirigir a otra página, etc.
      this.recipe = {
        id: '',
        name: '',
        author: '',
        image: '',
        ingredients: '',
        preparation: '',
        time: '',
        servings: ''
      };
    }
  }
};
</script>


<style>



</style>