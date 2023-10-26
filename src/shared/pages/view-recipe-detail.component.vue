<template>
    <div class="page-detaills">
        <div>
            <h1>Detalles de la Receta</h1>
            <div>
                <h2>{{ recipe.name }}</h2>
                <p> Autor: {{ authorName }}</p>
                <img :src="recipe.image" alt="Imagen de la receta" />
                <p>Tiempo estimado: {{ recipe.time }} minutos</p>
                <p>Porciones: {{ recipe.servings }}</p>
                <p>Ingredientes:</p>
                <ul>
                    <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
                </ul>
                <p>Preparación: {{ recipe.preparation }}</p>
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
  
</style>