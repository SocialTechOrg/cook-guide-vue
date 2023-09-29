<template>
  <div class="form-container">
    <form @submit.prevent="addRecipe" class="add-form">
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
      <pv-button class="custom-button" type="submit" label="Agregar Receta"/>
    </form>
  </div>

</template>

<script>
import axios from "axios";

export default {
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
    addRecipe() {
      if (!this.recipe.name || !this.recipe.author || !this.recipe.image) {
        alert("Por favor, complete los campos obligatorios.");
        return;
      }

      const recipeData = {
        id: this.recipe.id,
        name: this.recipe.name,
        author: this.recipe.author,
        image: this.recipe.image,
        ingredients: this.recipe.ingredients.split(','),
        preparation: this.recipe.preparation,
        time: this.recipe.time,
        servings: this.recipe.servings
      };

      axios.post('http://localhost:3000/recipes', recipeData)
          .then(response => {
            console.log('Receta enviada con éxito:', response.data);
            this.resetForm();
          })
          .catch(error => {
            console.error('Error al enviar la receta:', error);
          });
    },
    resetForm() {
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

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-form {
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

.form-group {
  width: 100%;
}
.add-form input,
.add-form textarea {
  width: 90%;
  margin: 10px;
}

</style>