<script>
export default {
  name: 'SideBar',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
};

</script>

<template>
  <div class="inicial">
    <div class="card flex justify-content-center">
      <pv-sidebar v-model:visible="visible">
        <div class="Content-SideBar">
          <div class="SideBar-Logo">
            <img src="/public/assets/cookguide_logo.png" alt="Logo" />
          </div>
          <div class="SideBar-Buttons">
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
          </div>
          <div class="nav-button-profile">
            <router-link to="/profile" class="nav-button" :class="{ active: isActive('/profile') }">
              <img src="https://img.icons8.com/fluency-systems-regular/48/8C8C8C/user--v1.png" alt="home--v1" :class="{ 'orange-icon': isActive('/profile') }" />
            </router-link>
          </div>
        </div>
      </pv-sidebar>
      <pv-button @click="visible = true" class="Button-Logo">
        <img src="/public/assets/cookguide_logo.png" alt="Logo" />
      </pv-button>
    </div>
  </div>
</template>

<style>
.Button-Logo{
  background-color: #ffffff;
  border: none;
  //box-shadow: 3px 0 5px rgba(0, 0, 0, 0.2);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
.Button-Logo img{
  align-self: flex-start;
  width: 64px;
  height: 64px;
  border: 2px solid #E06B43;
  margin-top: 20px;
}
.Content-SideBar{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.SideBar-Logo{
  margin-top: 10px;
  margin-bottom: 20px;
}
.SideBar-Logo img{
  width: 128px;
  height: 128px;
}
.SideBar-Buttons{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.SideBar-Buttons a{
  margin-bottom: 20px;
}

.nav-button-profile {
  margin-top: auto;
}

.orange-icon {
  color: #E06B43;
}
.inicial .card .p-button{

}

.active {
  border-bottom: 2px solid #E06B43;
}
@media (max-width: 425px) {
  .Button-Logo{
    display:none;
  }
  .inicial .card{
    display:none;
    margin:0;
  }
}

</style>