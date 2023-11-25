<template>
  <div class="form-container">
    <form @submit.prevent="editRecipe" class="add-form">
      <div class="form-group">
        <pv-input-text id="name" placeholder="Nombre" v-model="recipe.name" required/>
      </div>
      <div class="form-group">
        <pv-input-text id="category" placeholder="Categoría" v-model="recipe.category" required/>
      </div>
      <div class="form-group">
        <pv-input-text id="photoUrl" placeholder="URL de imagen" v-model="recipe.photoUrl" required/>
      </div>

      <div class="form-group">
        <label for="ingredients">Ingredientes</label>
        <div v-for="(ingredient, index) in recipe.ingredients" :key="index" class="ingredient-group">
          <div class="ingredient-item">
            <select :id="'ingredient-' + index" v-model="ingredient.id" class="ingredient-dropdown" required>
              <option v-for="availableIngredient in availableIngredients" :key="availableIngredient.id" :value="availableIngredient.id">
                {{ availableIngredient.name }}
              </option>
            </select>
            <pv-input-text :id="'quantity-' + index" placeholder="Cantidad" v-model="ingredient.quantity" required/>
            <pv-input-text :id="'measurement-' + index" placeholder="Medida" v-model="ingredient.measurement" required/>
          </div>
          <pv-button @click.prevent="removeIngredient(index)" icon="pi pi-trash" class="remove-button"/>
        </div>
        <pv-button @click.prevent="addIngredient" class="add-button">
          Agregar Ingrediente
        </pv-button>
      </div>

      <div class="form-group">
        <pv-textarea id="description" placeholder="Preparación" v-model="recipe.description" rows="5" cols="30" required/>
      </div>
      <div class="form-group">
        <pv-input-text id="preparationTime" placeholder="Tiempo de preparación" v-model="recipe.preparationTime" required/>
      </div>
      <div class="form-group">
        <pv-input-text id="num_portions" placeholder="Porciones" v-model="recipe.num_portions" required/>
      </div>
      <pv-button class="custom-button" type="submit" label="Editar Receta"/>
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
    removeIngredient(index) {
      this.recipe.ingredients.splice(index, 1);
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

.add-button {
  background-color: #ffffff;
  color: #777777;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #f2f2f2;
}

.ingredient-dropdown {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.ingredient-group {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ingredient-item {
  display: flex;
  align-items: center;
}

.remove-button {
  margin: 5px;
  font-size: 1rem;
  padding: 5px 10px;
}

.custom-button {
  background-color: #E06B43;
  border-color: #E06B43;
  border-radius: 20px;
}

.add-form input,
.add-form textarea {
  width: 90%;
  margin: 10px;
}

.pi {
  margin-right: 5px;
}


.form-group {
  width: 100%;
}

.add-button {
  background-color: #ffffff;
  color: #777777;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #f2f2f2;
}

.ingredient-dropdown {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.ingredient-group {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ingredient-item {
  display: flex;
  align-items: center;
}

.remove-button {
  margin: 5px;
  font-size: 1rem;
  padding: 5px 10px;
}

.custom-button {
  background-color: #E06B43;
  border-color: #E06B43;
  border-radius: 20px;
}

.add-form input,
.add-form textarea {
  width: 100%;
  margin: 10px;
}

.pi {
  margin-right: 5px;
}
</style>
