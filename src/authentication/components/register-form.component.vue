<template>
  <div class="card-register">
    <div class="register-content">
      <div class="register-logo">
        <img src="/public/assets/cookguide_logo.png" alt="Cook-Guide Logo">
      </div>
      <div>
        <h1 class="">Registro</h1>
      </div>
      <div class="register-class">
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
          class="Register-Form"
      >
        <div class="Register-Form-Element">
          <label for="firstname">First Name</label>
          <pv-input-text
                required
                id="firstname"
                class="w-full"
                v-model="user.firstName"
                placeholder="First Name"
                type="text"
          />
        </div>

        <div class="Register-Form-Element">
          <label for="lastname">Last Name</label>
          <pv-input-text
                required
                id="lastname"
                class="w-full"
                v-model="user.lastName"
                placeholder="Last Name"
                type="text"
          />
        </div>    
        
        <div class="Register-Form-Element">
          <label for="username">Username</label>
          <pv-input-text
              required
              id="username"
              class="w-full"
              v-model="user.username"
              placeholder="user123"
              type="text"
          />
        </div>

        <div class="Register-Form-Element">
          <label for="profilePicture">Photo URL</label>
          <pv-input-text
                required
                id="profilePicture"
                class="w-full"
                v-model="user.profilePicture"
                placeholder="www.picture.com"
                type="text"
          />
        </div>


        <div class="Register-Form-Element">
          <label for="email">Email</label>
          <pv-input-text
              required
              id="email"
              class="w-full"
              v-model="user.email"
              placeholder="example@mail.com"
              type="email"
          />
        </div>
        <div class="Register-Form-Element">
          <div>
            <label for="password">Password</label>
            <pv-input-text
                required
                id="password"
                class="w-full"
                v-model="user.password"
                type="password"
                placeholder="••••••••••••"
            />
          </div>
        </div>
        <div class="Register-Form-Element">
          <div>
            <label for="phone">Phone</label>
            <pv-input-text
                required
                id="phone"
                class="w-full"
                v-model="user.phone"
                type="number"
            />
          </div>
        </div>
        <div class="Register-Form-Element">
          <div>
            <label for="address">Address</label>
            <pv-input-text
                required
                id="address"
                class="w-full"
                v-model="user.address"
                type="text"
                placeholder="Street 123"
            />
          </div>
        </div>
        <pv-button class="register-button" type="submit" label="Registro" outlined/>
        <p class="Cuenta">¿Ya tienes una cuenta?<router-link to="/login">Inicio se sesión</router-link></p>
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
      user: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      address: '',
      profilePicture: '',
      userType: ''
    },
      isStudent: true,
      authApi: new AuthApiService(),
    }
  },
  methods: {
    setType(type, estate){
      this.type = type;
      this.isStudent = estate;
      this.user.userType = estate;
    },
    register(event) {
          console.log(this.user)
          this.authApi.signUp(this.user)
          .then(res => {
            this.$toast.add({
              severity: "success",
              summary: "Success",
              detail: `${res.data.message}. Redirecting to login...`,
              life: 3000
            });
            //setTimeout(() => {
              //this.$router.push("/login");
            //}, 3000);
          })
          .catch(err => {
            this.$toast.add({
              severity: "error",
              summary: "Error",
              detail: err.response.data,
              life: 4000
            });
          });
        }
    }
  }

</script>

<style >
.card-register{
  background-color: #ffffff;
  border: none;
  box-shadow: 3px 0 5px rgba(0, 0, 0, 0.2), -3px 0 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #E06B43;
}
.register-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.Register-Form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.Register-Form-Element{
  width: 100%;
  margin: 10px 0;
}
.Cuenta{
  display: flex;
  justify-content: space-evenly;
}
.Cuenta a{
  color: #b02500;
  padding: 0 4px;
}

.register-logo img{
  height: 240px;
  width: 240px;
}
.register-logo{
  margin-top: 20px;
}
.register-button{
  border-color: #E06B43;
  color: #ffffff;
  background-color: #E06B43;
  border-radius: 10px;
}
</style>