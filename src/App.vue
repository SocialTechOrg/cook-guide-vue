<script setup>
//import Menubar from "@/shared/components/menubar.component.vue";
import BottomBar from "@/shared/components/bottombar.component.vue";
import SideBar from "@/shared/components/sidebar.component.vue";
</script>


<template>
  <SideBar></SideBar>
  <router-view></router-view>
  <BottomBar></BottomBar>
</template>

<style>

body{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

#app{
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  display:flex; 
}

</style>
