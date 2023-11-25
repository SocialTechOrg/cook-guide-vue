<template>
  <div class="chef-homeview-container">
    <div class="header">
      <h1 class="title">Mis recetas</h1>
      <pv-button class="add-button" icon="pi pi-plus" severity="warning" rounded @click="addvisible = true" />

      <template>
        <div class="card flex justify-content-center">
          <pv-dialog v-model:visible="addvisible" modal header="Agregar Receta" :style="{ width: '50vw' }">
            <add-recipe-card :initialRecipe="recipe"></add-recipe-card>
          </pv-dialog>
        </div>
      </template>

      <template>
        <div class="card flex justify-content-center">
          <pv-dialog v-model:visible="editvisible" modal header="Editar Receta" :style="{ width: '50vw' }">
            <edit-recipe-card :recipe="recipeToEdit"></edit-recipe-card>
          </pv-dialog>
        </div>
      </template>

    </div>
    <div class="recipe-cards">
      <div class="card flex align-items-center justify-content-center" v-for="recipe in recipes" :key="recipe.recipeId">
        <pv-card style="width: 25em">
          <template #header>
            <h3>{{ recipe.name }}</h3>
            <img alt="recipe" :src="recipe.photoUrl" />
            <p style="font-style: italic">{{ recipe.category }}</p>
          </template>
          <template #content>
            <p>Tiempo estimado: {{ recipe.preparationTime }} minutos</p>
            <p>Porciones: {{ recipe.num_portions }}</p>
          </template>
          <template #footer>
            <div class="buttons">
              <router-link :to="'/view-recipe/' + recipe.recipeId">
                <pv-button class="custom-button" label="Ver receta" />
              </router-link>
              <pv-button icon="pi pi-pencil" severity="secondary" text rounded @click="editRecipe(recipe)" />
              <pv-button icon="pi pi-trash" severity="danger" text rounded @click="deleteRecipe(recipe)" />
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
import AddRecipeCard from "@/chefs/components/add-recipe-card.component.vue";
import EditRecipeCard from "@/chefs/components/edit-recipe-card.component.vue";
export default {
  name: 'chef-home',
  components: {
    AddRecipeCard,
    EditRecipeCard
  },
  data() {
    return {
      recipes: [],
      addvisible: false,
      editvisible: false,
      recipeToEdit: null,
    };
  },
  methods: {
    deleteRecipe(recipe) {
      const confirmDelete = confirm(`¿Estás seguro de que deseas eliminar la receta "${recipe.name}"?`);

      if (confirmDelete) {
        axios
            .delete(`http://localhost:5126/api/v1/recipes/${recipe.recipeId}`)
            .then(() => {
              this.recipes = this.recipes.filter(r => r.recipeId !== recipe.recipeId);
            })
            .catch(error => {
              console.error('Error al eliminar la receta:', error);
            });
      }
    },
    editRecipe(recipe) {
      this.recipeToEdit = recipe;
      this.editvisible = true;
    },
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user-data'));

    axios.get('http://localhost:5126/api/v1/recipes')
      .then(response => {
        // Filter recipes based on the logged-in user's accountId
        this.recipes = response.data.filter(recipe => recipe.accountId === this.user.id);
      })
      .catch(error => {
        console.error('Error al obtener las recetas:', error);
      });
        },
};

</script>

<style>

.chef-homeview-container{
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



.p-card{
  border-radius: 20px;
}

img{
  width: 80%;
  height: 80%;
  border-radius: 20px;
}

.buttons{
  display:flex;
  align-content: center;
  justify-content: center;
}

.add-button{
  margin-left: 20px;
  align-self: center;
  justify-self: center;
  background-color: #FC4E4E;
  border-color: #FC4E4E;
  color: white;
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