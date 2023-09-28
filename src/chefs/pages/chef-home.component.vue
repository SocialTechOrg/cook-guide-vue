<script>
import Menubar from "../../shared/components/menubar.component.vue";

export default {
  name: "chef-home",
  components: { Menubar }
};

</script>

<template>
  <Menubar></Menubar>
</template>

<style scoped>

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
}
</style>