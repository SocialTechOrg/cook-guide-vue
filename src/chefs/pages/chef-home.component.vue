<script>
import axios from 'axios';
export default {
  name: 'chef-home',
  data() {
    return {
      recipes: [], // Almacenará las recetas obtenidas del servidor JSON
    };
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

<template>
  <div class="chef-homeview-container">
    <h1 class="title">Mis recetas</h1>
    <div class="recipe-cards">

        <div class="card flex align-items-center justify-content-center" v-for="recipe in recipes" :key="recipe.id">
          <pv-card style="width: 25em">
            <template #header>
              <h3>{{recipe.name}}</h3>
              <img alt="user header" :src="recipe.image" />
            </template>
            <template #content>
              <p>Tiempo estimado: {{ recipe.time }}</p>
              <p>Porciones: {{ recipe.servings }}</p>
            </template>
            <template #footer>
              <pv-button class="custom-button" label="Ver receta" />
            </template>
          </pv-card>
        </div>

    </div>

  </div>

</template>

<style>

.chef-homeview-container{
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  padding-left: 8%;
}

.title{
  padding-left: 40px;
  padding-top: 20px;
  color: #FC4E4E;
}

.recipe-cards{
  width: 100%;
  height:100%;
  padding: 40px;
  display: flex; /* Muestra las tarjetas en línea */
  flex-wrap: wrap; /* Permite que las tarjetas se envuelvan cuando no quepan en el contenedor */
  justify-content: center; /* Centra las tarjetas horizontalmente */
}

.card{
  margin: 20px;
  align-content: center;
  justify-content: center;
  text-align:center;
}

.p-card{
  border-radius: 20px;
}

img{
  width: 80%;
  height: 80%;
  border-radius: 20px;
}

.custom-button{
  background-color: #E06B43;
  border-color: #E06B43;
  border-radius: 20px;
}

.p-button:focus {
  outline: none;
  box-shadow: none;
}

</style>