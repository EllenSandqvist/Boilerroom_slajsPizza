<script setup>

const emit = defineEmits(['close']);

</script>


<template>

<div class="cart-overlay" @click="emit('close')">
    <div class="cart-content" @click.stop>
      <h2>Pizza box</h2>
      <div class="customer-list">
        <!-- shopping list here -->
         <ul>
          <li>test</li>
         </ul>
      </div>
      <div class="customer-buttons">
          <!-- action buttons here -->
          <button> buy now, italy</button>
          <button @click="emit('close')">Close box</button>
      </div>
      
    </div>
  </div>
</template>



<style scoped>
.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.cart-content {
  background: 	white;
  width: 45%;
  height: 45%;
  min-width: 20rem;
  min-height: 10rem;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.customer-list{
  flex-grow: 1;
}

.customer-buttons{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}


</style>