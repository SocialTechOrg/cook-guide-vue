<script>
import LoginForm from "@/authentication/components/login-form.component.vue";
export default {
  name: "login",
  components:{LoginForm}
}

</script>

<template>
  <div class="login-home">
    <div>
      <login-form />
    </div>
  </div>
</template>

<style>
.login-home{
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
}
</style>