<script setup>
  import {ref} from "vue";
  const currentPage = ref('inicio');
</script>

<template>
  <nav class="menubar">
    <div class="top">
      <div class="logo">
        <img src="public/assets/cookguide_logo.png" alt="Logo" />
      </div>
      <ul class="menu">
        <li>
          <a class="menu-icon" href="#" :class="{ 'selected-icon': currentPage === 'inicio' }" >
            <img width="48" height="48" src="https://img.icons8.com/fluency-systems-regular/48/8C8C8C/home--v1.png" alt="home--v1"/>
            <span>Inicio</span>
          </a>
        </li>
        <li>
          <a class="menu-icon" href="#" :class="{ 'selected-icon': currentPage === 'ofertas' }">
            <img width="48" height="48" src="https://img.icons8.com/fluency-systems-regular/48/8C8C8C/discount.png" alt="discount"/>
            <span>Ofertas</span>
          </a>
        </li>
        <li>
          <a class="menu-icon" href="#" :class="{ 'selected-icon': currentPage === 'recetas' }">
            <img width="48" height="48" src="https://img.icons8.com/fluency-systems-regular/48/8C8C8C/cutlery.png" alt="cutlery"/>
            <span>Recetas</span>
          </a>
        </li>
        <li>
          <a class="menu-icon" href="#" :class="{ 'selected-icon': currentPage === 'planes' }">
            <img width="48" height="48" src="https://img.icons8.com/fluency-systems-regular/48/8C8C8C/clipboard-list--v3.png" alt="clipboard-list--v3"/>
            <span>Planes</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="account">
      <a class="menu-icon" href="#" :class="{ 'selected-icon': currentPage === 'cuenta' }">
        <img width="48" height="48" src="https://img.icons8.com/fluency-systems-regular/48/8C8C8C/user--v1.png" alt="user--v1"/>
        <span>Cuenta</span>
      </a>
    </div>
  </nav>
</template>


<style scoped>
  .menubar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    margin: 0;
    width: max-content;
    height: 100vh;
    box-shadow: 0px 0px 10px 0px lightgray;
    padding-left: 10px;
    padding-right:10px;
  }

  .logo img {
    width: 80px; /* Ajusta el tamaño de tu logo */
    height: auto;
    margin-top: 10px;
  }

  .menu {
    list-style: none;
    text-align: center;
    padding: 0;
  }

  .menu li{
    margin-bottom: 20px;
  }
  .menu-icon {
    margin: 10px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #8C8C8C;
    font-weight: normal;
    text-align:center;
    align-items: center;
    font-family: 'Secular One', sans-serif;
  }:hover{
    color: #E06B43;
     }

  .selected-icon {
    color: #E06B43; /* Change this to the desired color for selected icons */
  }

</style>
