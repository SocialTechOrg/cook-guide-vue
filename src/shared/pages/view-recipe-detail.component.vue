<template>
  <div class="page-detaills">
    <div class="recipe-tittle">
        <h1>Detalles de la Receta:</h1>
        <h2>{{ recipe.name }} </h2>
        <h3> Autor: {{ authorName }}</h3>
    </div>
    <div class="recipe-content">
      <div class="recipe-prime">
        <img class="recipe-img" :src="recipe.image" alt="Imagen de la receta" />
        <p>Tiempo estimado: {{ recipe.time }} minutos</p>
        <p>Porciones: {{ recipe.servings }}</p>
      </div>
      <div class="recipe-extension">
        <p>Ingredientes:</p>
        <ul>
            <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
        </ul>
        <b>Preparacion:</b> <br> <p>{{ recipe.preparation }}</p>
      </div>
    </div>
  </div>
</template>
  
<script>
  import { ref } from "vue";
  import axios from 'axios';
  export default {
    name: 'RecipeDetail',
    components: {
    },
    data() {
      return {
        recipe: {
            name: '',
            author: '',
            ingredients: [],
            preparation: '',
        },
        authorName: '',
      };
    },
    mounted() {
      const recipeId = this.$route.params.id;
      axios.get(`http://localhost:3000/recipes/${recipeId}`)
          .then(response => {
            this.recipe = response.data;

            
            axios.get(`http://localhost:3000/users/${this.recipe.author}`)
            .then(userResponse => {
                const user = userResponse.data;
                this.authorName = `${user.name} ${user.lastname}`;
            })
            .catch(error => {
                console.error('Error al obtener los detalles del autor:', error);
            });

          })
          .catch(error => {
            console.error('Error al obtener las recetas:', error);
          });
    },
  };
  
</script>
  
<style>
  .page-detaills {
    padding-left: 120px;
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