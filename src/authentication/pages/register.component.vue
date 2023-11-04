<script >
import RegisterForm from "@/authentication/components/register-form.component.vue";
export default {
  name: "register",
  components: {RegisterForm}
}
</script>

<template>
  <div class="register-home">
    <div>
      <register-form/>
    </div>
  </div>
</template>

<style >
.register-home{
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
</style>