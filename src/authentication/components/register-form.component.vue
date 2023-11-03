<template>
  <div class="bg-white dark:bg-black shadow-xl rounded px-8 pt-6 pb-8">
    <div class="flex flex-col space-y-6">
      <div class="flex justify-center">
        <img class="h-8 w-auto" src="" alt="Cook-Guide Logo">
      </div>
      <div>
        <h1 class="text-center font-bold text-3xl">Registro</h1>
      </div>
      <div class="grid grid-cols-2 font-medium gap-8">
        <button
            aria-label="Activate Student form"
            class="rounded py-3"
            :class="[isStudent ? 'bg-primary text-white' : 'border-2 border-primary text-primary']"
            @click="setType('student', true)"
        >
          Soy Estudiante
        </button>
        <button
            aria-label="Activate chef form"
            class="rounded py-3"
            :class="[!isStudent ? 'bg-primary text-white' : 'border-2 border-primary text-primary']"
            @click="setType('chef', false)"
        >
          Soy Cocinero
        </button>
      </div>
      <form
          v-on:submit="register($event)"
          class="flex flex-col space-y-3"
      >
        <div class="grid grid-cols-2 items-end gap-4">
          <div>
            <label for="name">Nombre</label>
            <pv-input-text
                required
                id="name"
                class="w-full"
                v-model="name"
                :placeholder="Nombre"
                type="text"
            />
          </div>
          <div>
            <label for="lastname">Apellido</label>
            <pv-input-text
                required
                id="lastname"
                class="w-full"
                v-model="lastname"
                :placeholder="Apellido"
                type="text"
            />
          </div>
        </div>
        <div>
          <label for="email">Email</label>
          <pv-input-text
              required
              id="email"
              class="w-full"
              v-model="email"
              placeholder="example@mail.com"
              type="email"
          />
        </div>
        <div class="grid grid-cols-2 items-end gap-4">
          <div>
            <label for="password">Contraseña</label>
            <pv-input-text
                required
                id="password"
                class="w-full"
                v-model="password"
                type="password"
                placeholder="••••••••••••"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 items-end gap-4">
          <div>
            <label for="phone">Numero de Contacto</label>
            <pv-input-text
                required
                id="phone"
                class="w-full"
                v-model="phone"
                type="number"
            />
          </div>
        </div>
        <pv-button type="submit" label="Registro" outlined/>
        <p class="text-center my-4">¿Ya tienes una cuenta?<router-link class="hover:font-medium text-primary" to="/login">Inicio se sesión</router-link></p>
      </form>
    </div>
  </div>
</template>

<script >
import {AuthApiService} from "@/authentication/services/AuthApiService";
export default {
  name: "register-form",
  data(){
    return{
      name: '',
      lastname: '',
      id: '',
      type: '',
      email: '',
      user: '',
      password: '',
      picture: '',
      phone: '',
      birthday: '',
      gender: '',
      diet: '',
      allergies: '',
      preferences: '',
      needs: '',
      height: '',
      weight: '',
      authApi: new AuthApiService(),
      isStudent: true
    }
  },
  methods: {
    setType(type, estate){
      this.type = type;
      this.isStudent = estate;
    },
    register(event) {
      event.preventDefault();

      this.authApi.signUp(
          this.name,
          this.lastname,
          this.id,
          this.type,
          this.email,
          this.user,
          this.password,
          this.picture,
          this.phone,
          this.birthday,
          this.gender,
          this.diet,
          this.allergies,
          this.preferences,
          this.needs,
          this.height,
          this.weight
      ).then(res => {
        this.$toast.add({
          severity: "success",
          summary: "Success",
          detail: `${res.data.message}. Redirecting to login...`,
          life: 3000
        });
        setTimeout(() => {
          this.$router.push("/login");
        }, 3000);
      }).catch(err => {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: err.response.data,
          life: 4000
        });
      })
    }
  }
}

</script>

<style >

</style>