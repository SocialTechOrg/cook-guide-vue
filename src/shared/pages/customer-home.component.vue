<template>
    <div class="customer-homeview-container">
      <div class="header">
        <h1 class="title">Recetas</h1>
      </div>
      <div class="recipe-cards">
          <div class="card flex align-items-center justify-content-center" v-for="recipe in recipes" :key="recipe.id">
            <pv-card style="width: 25em">
              <template #header>
                <h3>{{recipe.name}}</h3>
                <img alt="user header" :src="recipe.image" />
              </template>
              <template #content>
                <p>Tiempo estimado: {{ recipe.time }} minutos</p>
                <p>Porciones: {{ recipe.servings }}</p>
              </template>
              <template #footer>
                <div class="buttons">
                  <router-link :to="'/view-recipe/' + recipe.id">
                    <pv-button class="custom-button" label="Ver receta" />
                  </router-link>
                </div>
              </template>
            </pv-card>
          </div>
      </div>
    </div>
  
  
  </template>
  
  <script>
  import { ref } from "vue";
  import axios from 'axios';
  export default {
    name: 'customer-home',
    components: {
    },
    data() {
      return {
        recipes: [],
      };
    },
    methods: {
    },
    mounted() {
      axios.get('http://localhost:3000/recipes')
          .then(response => {
            this.recipes = response.data;
          })
          .catch(error => {
            console.error('Error al obtener las recetas:', error);
          });
    },
  };
  
  </script>
  
  <style>
  
  .customer-homeview-container{
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    padding-left: 4%;
  }
  
  .header{
    padding-left: 40px;
    padding-top: 20px;
    display: flex;
    flex-direction: row;
  }
  
  .title{
  
    color: #FC4E4E;
  }
  
  .recipe-cards{
    width: 100%;
    height:100%;
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .card{
    margin: 20px;
    align-content: center;
    justify-content: center;
    text-align:center;
    height: 100%;
  }
  
  .p-card{
    border-radius: 20px;
  }
  
  img{
    width: 80%;
    height: 80%;
    border-radius: 20px;
  }

  @media screen and (max-width: 425px){
    .chef-homeview-container{
      padding-left: 0px;
    }
  }
  
  </style>