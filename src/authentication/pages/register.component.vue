<script >
import RegisterForm from "@/authentication/components/register-form.component.vue";
export default {
  name: "register",
  components: {RegisterForm}
}
</script>

<template>
  <div class="flex justify-center items-center h-full">
    <div class="w-full max-w-xl">
      <register-form/>
    </div>
  </div>
</template>

<style >

</style>