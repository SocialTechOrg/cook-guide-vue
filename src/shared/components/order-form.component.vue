<template>
  <div class="order-form-overlay">
    <div class="order-form-container">
      <h2>Realizar Pedido</h2>

      <div class="form-group">
        <label for="numPortions">Número de Porciones:</label>
        <input type="number" id="numPortions" v-model="numPortions" />
      </div>

      <div class="form-group">
        <label for="date">Fecha:</label>
        <input type="date" id="date" v-model="date" />
      </div>

      <div class="form-group">
        <label for="time">Hora:</label>
        <input type="time" id="time" v-model="time" />
      </div>

      <div class="price-section">
        <p><b>Precio:</b> S/ {{ calculatePrice() }}</p>
      </div>

      <div class="button-section">
        <pv-button @click="submitOrder" class="submit-button">
          <i class="pi pi-check"></i> Realizar Pedido
        </pv-button>
        <pv-button @click="closeForm" class="cancel-button">
          <i class="pi pi-times"></i> Cancelar Pedido
        </pv-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['recipe'],
  data() {
    return {
      numPortions: 1,
      date: '',
      time: '',
    };
  },
  methods: {
    calculatePrice() {
      var price = this.recipe.serving_price;
      return this.numPortions * price;
    },
    submitOrder() {
      alert('Pedido realizado con éxito!');
      this.closeForm();
    },
    closeForm() {
      this.$emit('closeForm');
    },
  },
};
</script>

<style>

.order-form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.order-form-container {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 500px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.price-section {
  margin-top: 20px;
}

.button-section {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.submit-button,
.cancel-button {
  margin-left: 10px; 
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 14px;
}

.submit-button {
  background-color: #4CAF50;
  color: white;
}

.submit-button:hover {
  background-color: #45a049;
}

.cancel-button {
  background-color: #e16e43;
  color: white;
}

.cancel-button:hover {
  background-color: #d1553d;
}
</style>
