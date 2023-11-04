<script>
  export default {
    name: 'BottomBar',
    methods: {
      isActive(route) {
        return this.$route.path === route;
      },
    },
  };
</script>

<template>
  <div class="bottom-bar">
    <router-link to="/home" class="nav-button" :class="{ active: isActive('/home') }">
      <img src="https://img.icons8.com/fluency-systems-regular/48/8C8C8C/home--v1.png" alt="home--v1" :class="{ 'orange-icon': isActive('/home') }"/>
    </router-link>
    <router-link to="/discount" class="nav-button" :class="{ active: isActive('/discount') }">
      <img src="https://img.icons8.com/fluency-systems-regular/48/8C8C8C/discount.png" alt="home--v1" :class="{ 'orange-icon': isActive('/discount') }"/>
    </router-link>
    <router-link to="/myrecipes-chef" class="nav-button" :class="{ active: isActive('/myrecipes-chef') }">
      <img src="https://img.icons8.com/fluency-systems-regular/48/8C8C8C/cutlery.png" alt="home--v1" :class="{ 'orange-icon': isActive('/myrecipes-chef') }"/>
    </router-link>
    <router-link to="/clipboard-list" class="nav-button" :class="{ active: isActive('/clipboard-list') }">
      <img src="https://img.icons8.com/fluency-systems-regular/48/8C8C8C/clipboard-list--v3.png" alt="home--v1" :class="{ 'orange-icon': isActive('/clipboard-list') }"/>
    </router-link>
    <router-link to="/profile" class="nav-button" :class="{ active: isActive('/profile') }">
      <img src="https://img.icons8.com/fluency-systems-regular/48/8C8C8C/user--v1.png" alt="home--v1" :class="{ 'orange-icon': isActive('/profile') }" />
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
    background-color: white;
    color: #333;
    box-shadow: 0px -3px 6px rgba(0, 0, 0, 0.1);
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

  .nav-button span {
    font-size: 12px;
  }
  .bottom-bar img{
    width: 30px;
    height: 30px;
  }

  .orange-icon {
    color: #E06B43;
  }

  .active {
    border-bottom: 2px solid #E06B43;
  }
}

</style>