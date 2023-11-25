<template>
  <div class="page-detaills">
    <div class="recipe-title">
        <h1>{{ recipe.name }} </h1>
    </div>
    <div class="recipe-author">
      <img class="author-picture" :src="authorPicture" />
      <p> <b>Autor: </b> {{ authorName }} </p>
    </div>
    <div class="recipe-content">
      <div class="recipe-prime">
        <img class="recipe-img" :src="recipe.photoUrl" alt="Imagen de la receta" />
        <p>Tiempo estimado: {{ recipe.preparationTime }} minutos</p>
        <p>Porciones: {{ recipe.num_portions }}</p>
      </div>
      <div class="recipe-extension">
        <p><b>Ingredientes: </b></p>
          <ul>
            <li v-for="ingredient in recipe.ingredients" :key="ingredient.id">
              {{ ingredient.name }} - {{ ingredient.quantity }} {{ ingredient.measurement }}
          </li>
          </ul>
        <b>Preparacion:</b> <br> <p>{{ recipe.description }}</p>
  </div>
    </div>
  </div>
</template>
  
<script>
import { ref, toHandlers } from "vue";
import axios from 'axios';

export default {
  name: 'RecipeDetail',
  components: {},
  data() {
    return {
      recipe: {
        name: '',
        author: '',
        ingredients: [],
        preparation: '',
      },
      authorName: '',
      authorPicture: '',
    };
  },
  methods: {
    async getIngredientName(ingredientId) {
      try {
        const response = await axios.get(`http://localhost:5126/api/v1/ingredients/${ingredientId}`);
        return response.data.name;
      } catch (error) {
        console.error(`Error al obtener los datos del ingrediente con ID ${ingredientId}:`, error);
        return 'Nombre Desconocido';
      }
    }
  },
  async beforeMount() {
    const recipeId = this.$route.params.id;
    try {
      const response = await axios.get(`http://localhost:5126/api/v1/recipes/${recipeId}`);
      this.recipe = response.data;

      // Modificar los objetos de los ingredientes para incluir el nombre
      for (const ingredient of this.recipe.ingredients) {
        ingredient.name = await this.getIngredientName(ingredient.id);
      }

      const userResponse = await axios.get(`http://localhost:5126/api/v1/accounts/${this.recipe.accountId}`);
      const user = userResponse.data;
      this.authorName = `${user.firstName} ${user.lastName}`;
      this.authorPicture = `${user.profilePicture}`;
    } catch (error) {
      console.error('Error al obtener los detalles del autor o la receta:', error);
    }
  }
};
</script>
  
<style>
  .page-detaills {
    padding-left: 120px;
  }

  .recipe-title h1 {
    color: #FC4E4E;
  }
  .recipe-author{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    font-style: italic;
  }
  .recipe-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .recipe-prime img {
    width: auto;
    height: 350px;
    object-fit: cover;
    border-radius: 10px;
  }
  .recipe-extension {
    background: bisque;
    padding: 20px ;
    border-radius: 10px;
    margin-left: 15px;
    margin-right: 10px;
  }
  .author-picture{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .recipe-extension ul{
    padding-left: 20px;
  }
  @media screen and (max-width: 800px){
    .recipe-content{
      flex-direction: column;
    }
  }
  @media screen and (max-width: 600px){
    .recipe-prime img{
      height:150px ;
    }
  }


  
</style>