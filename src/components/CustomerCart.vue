<script setup>
import {computed} from 'vue'
const {shoppingCart} = defineProps({ 
  shoppingCart: {
    type: Array,
    default: () => [], // Provide a default value to avoid errors
  }
  
})
const emit = defineEmits(['close']);


const totalPrice = computed(()=>{
  
   
  return shoppingCart.reduce((total, item) => total + item.price|| 0, 0)}

)
</script>


<template>

<div class="cart-overlay" @click="emit('close')">
    <div class="cart-content" @click.stop>
      <h2>Pizza box</h2>
      <div class="customer-list">
        <!-- shopping list here -->
         <ul >
          <li  v-for="item in shoppingCart">
            <div class="customer-item">
                <img :src="item.imgUrl" alt="" class="meal-img" />
                <span class="item-name">
                    {{item.name}}
                </span>
                <strong class="item-price">
                    {{ item.price }}kr
                </strong>
            </div>
        </li>
        </ul>
      </div>
      <div class="customer-buttons">
          <!-- action buttons here -->
          <button> buy now, italy</button>
          <span><strong>{{ totalPrice }} kr</strong></span>
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
  border: 2px solid black;
  width: 100%;
  margin: 2em 1em;
  overflow-y: scroll;
  
}

.customer-item{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
}

.meal-img {
  height: 30px;
  align-self: center;
}
.customer-list ul{
    list-style-type: none;
    margin:0;
    padding:0;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:0.5rem;
    padding-top: 0.5rem;
}

.customer-list li{
  width: 100%;
  display: flex;
  align-items: start;
  padding-left: 0.5rem;
  padding-right: 1rem;
}

.item-name {
    flex-grow: 1; /* Take up all available space */
    margin-left:0.5rem; /* Add space between name and image */
}

.item-price {
    margin-left: auto; /* Push the price to the far right */
}
.customer-buttons{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}


</style>