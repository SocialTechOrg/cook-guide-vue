<template>
  <form v-on:submit.prevent="login" class="card-login">
    <div class="card-components-login">
      <div class="card-components">
        <img src="public/assets/cookguide_logo.png" alt="CookGuide Logo">
      </div>
      <div class="card-components">
        <h1>Inicio de sesión</h1>
      </div>
      <div class="card-components">
        <label for="email">
          Email
        </label>
        <pv-input-text id="email" class="w-full" v-model="email" placeholder="example@mail.com" type="email" />
      </div >
      <div class="card-components">
        <label for="password">
          Contraseña
        </label>
        <pv-input-text id="password" class="w-full" v-model="password" type="password" placeholder="••••••••••••" />
      </div>
      <pv-button class="button-login" type="button" label="Inicio" outlined v-on:click="login" />
      <div class="footer-login">
        <p>
          <router-link to="/forgot-password" class="hover:font-medium">Olvide mi contraseña</router-link>
        </p>
        <p>¿No tienes Cuenta?
          <router-link to="/register">Registro</router-link>
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
.card-login{
  background-color: #ffffff;
  border: none;
  box-shadow: 3px 0 5px rgba(0, 0, 0, 0.2), -3px 0 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Logo-Login img{
  height: 240px;
  width: 240px;
}
.card-login img{
  height: 120px;
  width: 120px;
}
.card-components-login{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  color: #E06B43;
}

.footer-login{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.footer-login a{
  color: #b02500;
}
.card-components{
  margin: 15px 0;
}
.button-login{
  border-color: #E06B43;
  color: #ffffff;
  background-color: #E06B43;
  border-radius: 10px;
}
</style>