<template>
  <div class="edit-form-container">
    <form @submit.prevent="editRecipe" class="edit-form">
      <div class="edit-form-group">
        <pv-input-text id="name" placeholder="Nombre" v-model="recipe.name" required/>
      </div>
      <div class="edit-form-group">
        <pv-input-text id="image" placeholder="URL de imagen" v-model="recipe.image" required/>
      </div>
      <div class="edit-form-group">
        <pv-textarea id="ingredients" placeholder="Ingredientes" v-model="recipe.ingredients" rows="5" cols="30" required/>
      </div>
      <div class="edit-form-group">
        <pv-textarea id="preparation" placeholder="Preparación" v-model="recipe.preparation" rows="5" cols="30" required/>
      </div>
      <div class="edit-form-group">
        <pv-input-text id="time" placeholder="Tiempo de preparación" v-model="recipe.time" required/>
      </div>
      <div class="edit-form-group">
        <pv-input-text id="servings" placeholder="Porciones" v-model="recipe.servings" required/>
      </div>
      <pv-button class="custom-button" type="submit">Editar Receta</pv-button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    recipe: Object,
    editMode: Boolean,
  },
  data() {
    return {
      editedRecipe: { ...this.recipe },
    };
  },
  methods: {
    editRecipe() {
      if (!this.recipe.name || !this.recipe.image) {
        alert("Por favor, complete los campos obligatorios.");
        return;
      }
      const dataRecipe = {
        id: this.recipe.id,
        name: this.recipe.name,
        author: localStorage.getItem('userId'),
        image: this.recipe.image,
        ingredients: this.recipe.ingredients.split(','),
        preparation: this.recipe.preparation,
        time: this.recipe.time,
        servings: this.recipe.servings
      };

      axios.put(`http://localhost:3000/recipes/${this.editedRecipe.id}`, dataRecipe)
          .then(response => {
            console.log('Receta editada con éxito:', response.data);
          })
          .catch(error => {
            console.error('Error al editar la receta:', error);
          });
    },
  },
}
</script>

<style>

.edit-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.edit-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.custom-button {
  background-color: #E06B43;
  border-color: #E06B43;
  border-radius: 20px;
}

.edit-form-group {
  width: 100%;
}

.edit-form input,
.edit-form textarea {
  width: 90%;
  margin: 10px;
}

</style>