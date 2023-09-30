<script>
export default {
  name: 'profile',
  data(){
    return {
      user:{
        'id': '',
        'type': '',
        'email': '',
        'user': '',
        'password': '',
        'name': '',
        'lastname': '',
        'picture': '',
        'phone': '',
        'birthday':'',
        'gender': '',
        'diet': '',
        'allergies': [],
        'preferences': [],
        'needs': [],
        'height': '',
        'weight': ''
      },

    }
  },
  mounted() {
    localStorage.setItem('userId', "5");
    this.userId = localStorage.getItem('userId');
    fetch(`http://localhost:3000/users/${this.userId}`)
        .then(response => response.json())
        .then(data => {
          this.user = data;
        })
        .catch(error => {
          console.error('Error al obtener la información del usuario:', error);
        });
  }
}

</script>

<template>
  <div class="profile-container">
    <div class="profileview-container">
      <div class="profile-header">
        <pv-button class="custom-icon" icon="pi pi-calendar" text rounded/>
        <h3>{{ user.name }} {{user.lastname}}</h3>
        <pv-button class="custom-icon" icon="pi pi-bell" text rounded/>
      </div>
      <div class="user-info">
        <img class="user-picture" src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoZWZ8ZW58MHx8MHx8fDA%3D&w=1000&q=80" :alt="user.name" />
        <span>{{ user.email }}</span>
      </div>
      <div class="user-statistics">
        <div class="stat-item">
          <b>40</b> <br>
          <span>Reseñas</span>
        </div>
        <div class="stat-item">
          <b>40</b> <br>
          <span>Comentarios</span>
        </div>
        <div class="stat-item">
          <b>40</b> <br>
          <span>Guardados</span>
        </div>
      </div>
    </div>
    <div class="profile-options">
      <ul class="option-list">
        <li>
          <a href="#" class="list-item">
            <i class="pi pi-apple" style="font-size: 1.5rem; color:#FFAC4A"></i>
            <span>Preferencias dietéticas</span>
          </a>
        </li>
        <li>
          <a href="#" class="list-item">
            <i class="pi pi-heart-fill" style="font-size: 1.5rem; color:#FFAC4A"></i>
            <span>Información de salud</span>
          </a>
        </li>
        <li>
          <a href="#" class="list-item">
            <i class="pi pi-chart-bar" style="font-size: 1.5rem; color:#FFAC4A"></i>
            <span>Metas</span>
          </a>
        </li>
        <li>
          <a href="#" class="list-item">
            <i class="pi pi-check" style="font-size: 1.5rem; color:#FFAC4A"></i>
            <span>Preferencias</span>
          </a>
        </li>
        <li>
          <a href="#" class="list-item">
            <i class="pi pi-cog" style="font-size: 1.5rem; color:#FFAC4A"></i>
            <span>Configurar perfil</span>
          </a>
        </li>
        <li>
          <a href="#" class="list-item">
            <i class="pi pi-power-off" style="font-size: 1.5rem; color:#FFAC4A"></i>
            <span>Cerrar sesión </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>


<style>

.profile-container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color:white;
  margin: 0;
  padding: 0;

}

.profileview-container{
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 8%;
  background: linear-gradient(to bottom, #E06B43, #FFAC4A);
  box-shadow: 0px 8px 8px 0px lightgray;
}

.profile-header{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
}

.custom-icon{
  color: white;
  align-self: center;
  justify-self: center;
}

.user-info{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
  color:white;
}

.user-picture{
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.user-statistics{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 30px;
  color: white;
}

.stat-item{
  text-align: center;

}

.profile-options{
  display:flex;
  color: black;
  padding-left: 8%;
  align-content: center;
  justify-content: center;
  margin: auto;
}

.option-list{
  text-align: left;
  padding: 0;
}

ul{
  list-style-type: none;
}

i{
  margin-right: 10px;
}

.list-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  text-decoration: none;
  color: black;
  transition: background-color 0.2s;
}

.list-item:hover {
  color: #FFAC4A;
}


</style>