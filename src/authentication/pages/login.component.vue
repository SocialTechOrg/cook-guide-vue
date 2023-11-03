<script>
import LoginForm from "@/authentication/components/login-form.component.vue";
export default {
  name: "login",
  components:{LoginForm}
}

</script>

<template>
  <div class="flex justify-center items-center h-full">
    <div class="w-full max-w-xl">
      <login-form />
    </div>
  </div>
</template>

<style>

</style>