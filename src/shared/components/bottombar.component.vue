<script>
  export default {
    name: 'BottomBar',
  };
</script>

<template>
  <div class="bottom-bar">
    <router-link to="/home" class="nav-button">
      <pv-button icon="pi pi-home"/>
    </router-link>
    <router-link to="/ruta2" class="nav-button">
      <pv-button icon="pi pi-percentage"/>
    </router-link>
    <router-link to="/myrecipes-chef" class="nav-button">
      <pv-button icon="pi pi-apple"/>
    </router-link>
    <router-link to="/ruta4" class="nav-button">
      <pv-button icon="pi pi-book"/>
    </router-link>
    <router-link to="/profile" class="nav-button">
      <pv-button icon="pi pi-user"/>
    </router-link>
  </div>
</template>

<style>

.bottom-bar{
  display: none;
}

@media (max-width: 425px) {
  .bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    background-color: #E06B43;
    color: #fff;
  }

  .nav-button {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
    padding: 10px 0;
  }

  .nav-button i {
    font-size: 24px;
  }

  .nav-button span {
    font-size: 12px;
  }
  .p-button{
    background-color: #E06B43;
    color: #fff;
    border-color: transparent;
  }
}

</style>