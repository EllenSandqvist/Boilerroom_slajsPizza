<script setup>
const props = defineProps({
  isDarkMode: Boolean,
});

const emit = defineEmits(["close-modal"]);
</script>

<template>
  <div class="modal-bg" @click="emit('close-modal')">
    <div
      class="modal-content"
      :class="{ 'modal-dark': isDarkMode }"
      @click.stop
    >
      <h2>Statistics</h2>
      <!-- v-for i ul => one ul foreach order in orderhistory -->
      <ul class="order-history">
        <h3>Order 2024-11-30 ~ Total price: 123kr</h3>
        <li class="order-item">
          <p class="order-text">Id. Name <span>Price</span></p>
        </li>
        <li class="order-item">
          <p class="order-text">Id. Name <span>Price</span></p>
        </li>
      </ul>
      <button class="close-btn" @click="emit('close-modal')">Close</button>
    </div>
  </div>
</template>

<style scoped>
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: rgb(220, 220, 220);
  min-width: 400px;
  padding: 1rem;
  border-radius: 8px;
  width: 60%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  height: 550px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.modal-dark {
  background: rgb(40, 40, 40);
  border: 2px solid rgb(164, 164, 98);
  color: white;
}

h3 {
  margin-bottom: 1em;
}

/* Close button styling */
.close-btn {
  margin-top: 2rem;
  padding: 0.5rem 1.5rem;
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  width: 100px;
}

.close-btn:hover {
  background-color: #d9363e;
}

.order-history {
  list-style: none;
  padding: 0;
}

.order-item {
  border: 1px solid rgba(112, 112, 112, 0.9);
  border-radius: 5px;
  padding: 12px;
  width: 100%;
  margin-bottom: 10px;
}

.order-text {
  font-size: 1.2rem;
}
</style>
