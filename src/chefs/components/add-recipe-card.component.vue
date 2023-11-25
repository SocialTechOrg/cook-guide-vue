<template>
  <div class="form-container">
    <form @submit.prevent="addRecipe" class="add-form">
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
          <pv-button @click.prevent="removeIngredient" icon="pi pi-trash" class="remove-button"/>
        </div>
        <div class="form-group">
          <pv-button @click.prevent="addIngredient" class="add-button">
            Agregar Ingrediente
          </pv-button>
        </div>
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
      <div class="form-group">
        <pv-input-text id="serving_price" placeholder="Precio por porción" v-model="recipe.serving_price" required/>
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
        'name': '',
        'category': '',
        'accountId': '',
        'photoUrl': '',
        'ingredients': [{ id: '', quantity: '', measurement: '' }],
        'description': '',
        'preparationTime': '',
        'num_portions': '',
        'serving_price': ''
      },
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
    addRecipe() {
      if (!this.recipe.name || !this.recipe.photoUrl) {
        alert("Por favor, complete los campos obligatorios.");
        return;
      }

      const formattedIngredients = this.recipe.ingredients.map(ingredient => ({
        id: ingredient.id,
        quantity: ingredient.quantity,
        measurement: ingredient.measurement,
      }));

      const recipeData = {
        id: this.recipe.id,
        name: this.recipe.name,
        category: this.recipe.category,
        accountId: JSON.parse(localStorage.getItem('user-data')).id,
        photoUrl: this.recipe.photoUrl,
        ingredients: formattedIngredients,
        description: this.recipe.description,
        preparationTime: this.recipe.preparationTime,
        num_portions: this.recipe.num_portions,
        serving_price: this.recipe.serving_price
      };

      axios.post('http://localhost:5126/api/v1/recipes', recipeData)
        .then(response => {
          console.log('Receta enviada con éxito:', response.data);
          this.resetForm();
        })
        .catch(error => {
          console.error('Error al enviar la receta:', error.response.data); 
        });
    },
    resetForm() {
      this.recipe = {
        id: '',
        name: '',
        accountId: '',
        photoUrl: '',
        ingredients: [{ id: '', quantity: '', measurement: '' }],
        description: '',
        preparationTime: '',
        num_portions: '',
        serving_price: ''
      };
    }
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
