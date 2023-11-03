<template>
  <div class="fixed top-4 left-4 p-4 hidden md:block">
    <img class="h-1 w-auto" src="public/cookguide.ico" alt="CookGuide Icon">
  </div>
  <form v-on:submit.prevent="login" class="bg-white dark:bg-black shadow-xl rounded px-8 pt-6 pb-8">
    <div class="flex flex-col space-y-6">
      <div class="flex justify-center">
        <img class="h-8 w-auto" src="public/assets/cookguide_logo.png" alt="CookGuide Logo">
      </div>
      <div>
        <h1 class="text-center font-bold text-3xl">Inicio de sesión</h1>
      </div>
      <div class="w-full">
        <label class="block tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" for="email">
          Email
        </label>
        <pv-input-text id="email" class="w-full" v-model="email" placeholder="example@mail.com" type="email" />
      </div>
      <div class="w-full">
        <label class="block tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2" for="password">
          Contraseña
        </label>
        <pv-input-text id="password" class="w-full" v-model="password" type="password" placeholder="••••••••••••" />
      </div>
      <pv-button type="button" label="Inicio" outlined v-on:click="login" />
      <div class="grid place-items-center">
        <p class="text-primary">
          <router-link to="/forgot-password" class="hover:font-medium">Olvide mi contraseña</router-link>
        </p>
        <p>¿No tienes Cuenta?
          <router-link class="hover:font-medium text-primary" to="/register">Registro</router-link>
        </p>
      </div>
    </div>
  </form>
</template>

<script>
import { AuthApiService } from "@/authentication/services/AuthApiService";

export default {
  name: "login-form",
  data() {
    return {
      email: '',
      password: '',
      authApi: new AuthApiService(),
    };
  },
  methods: {
    async login() {
      // Validar que se hayan ingresado el email y la contraseña
      if (!this.email || !this.password) {
        alert("Por favor ingrese su email y contraseña.");
        return;
      }

      try {
        // Llama a la función de autenticación para verificar las credenciales
        const user = await this.authApi.login(this.email, this.password);

        // Si la autenticación es exitosa, puedes redirigir al usuario a otra página
        if (user) {
          // Redirige al usuario a una página de inicio, por ejemplo:
          this.$router.push("/recipes");
        } else {
          alert("Credenciales incorrectas. Por favor, verifique su email y contraseña.");
        }
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        alert("Ocurrió un error al iniciar sesión. Por favor, inténtelo nuevamente.");
      }
    }
  }
};

</script>



<style>

</style>