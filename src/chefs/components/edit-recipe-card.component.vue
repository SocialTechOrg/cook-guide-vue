<template>
  <div class="edit-form-container">
    <form @submit.prevent="editRecipe" class="edit-form">
      <div class="edit-form-group">
        <pv-input-text id="name" placeholder="Nombre" v-model="recipe.name" required />
      </div>
      <div class="edit-form-group">
        <pv-input-text id="category" placeholder="Categoría" v-model="recipe.category" required />
      </div>
      <div class="edit-form-group">
        <pv-input-text id="photoUrl" placeholder="URL de imagen" v-model="recipe.photoUrl" required />
      </div>

      <div class="edit-form-group" id="ingredients">
        <div v-for="(ingredient, index) in recipe.ingredients" :key="index" class="edit-form-group">
          <label for="ingredient">Ingrediente {{ index + 1 }}</label>
          <div class="ingredient-group">
            <!-- Lista desplegable para el nombre del ingrediente -->
            <select :id="'ingredient-name-' + index" v-model="ingredient.id" required>
              <option v-for="availableIngredient in availableIngredients" :key="availableIngredient.id" :value="availableIngredient.id">
                {{ availableIngredient.name }}
              </option>
            </select>

            <pv-input-text :id="'ingredient-quantity-' + index" placeholder="Cantidad" v-model="ingredient.quantity" required/>
            <pv-input-text :id="'ingredient-measurement-' + index" placeholder="Medida" v-model="ingredient.measurement" required/>
          </div>
        </div>

        <div class="edit-form-group">
          <pv-button class="custom-button" @click.prevent="addIngredient">Agregar Ingrediente</pv-button>
        </div>
      </div>

      <div class="edit-form-group">
        <pv-textarea id="description" placeholder="Preparación" v-model="recipe.description" rows="5" cols="30" required />
      </div>
      <div class="edit-form-group">
        <pv-input-text id="preparationTime" placeholder="Tiempo de preparación" v-model="recipe.preparationTime" required />
      </div>
      <div class="edit-form-group">
        <pv-input-text id="num_portions" placeholder="Porciones" v-model="recipe.num_portions" required />
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
      availableIngredients: [],
    };
  },
  methods: {
    addIngredient() {
      this.recipe.ingredients.push({ id: null, quantity: '', measurement: '' });
    },

    editRecipe() {
      const formData = this.recipe;

      console.log('Photo URL:', formData.photoUrl);

      if (!formData.name || !formData.photoUrl) {
        alert("Por favor, complete los campos obligatorios.");
        return;
      }

      const dataRecipe = {
        id: formData.recipeId,
        name: formData.name,
        category: formData.category,
        photoUrl: formData.photoUrl,
        ingredients: formData.ingredients,
        description: formData.description,
        preparationTime: formData.preparationTime,
        num_portions: formData.num_portions,
      };

      console.log('Data to be sent:', dataRecipe);
      
      axios
        .put(`http://localhost:5126/api/v1/recipes/${formData.recipeId}`, dataRecipe)
        .then((response) => {
          console.log('Receta editada con éxito:', response.data);
        })
        .catch((error) => {
          console.error('Error al editar la receta:', error);
        });

        console.log('Photo URL:', formData.photoUrl);
    },
  },
  mounted() {
    axios
      .get('http://localhost:5126/api/v1/ingredients')
      .then((response) => {
        this.availableIngredients = response.data;
      })
      .catch((error) => {
        console.error('Error al obtener la lista de ingredientes:', error);
      });
  },
};
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
