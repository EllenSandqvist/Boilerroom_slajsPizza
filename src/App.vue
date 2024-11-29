<script setup>
import { computed, ref } from "vue";
import { useMenu } from "./composables/useMenu.js";
import MenuCard from "./components/MenuCard.vue";
import CustomerCart from "./components/CustomerCart.vue"

const { data, loading, error } = useMenu();
const showCart = ref(false)
const shoppingCart = ref([])

const isDarkMode = ref(false);

//Varför behövs computed? Vi hämtar bara menyn när sidan laddas.
const pizzaList = computed(() =>
  data.value.filter((item) => item.type === "pizza")
);
const saladList = computed(() =>
  data.value.filter((item) => item.type === "salad")
);
const drinkList = computed(() =>
  data.value.filter((item) => item.type === "drink")
);


const addItemToShoppingCart = (item)=>{
  shoppingCart.value.push(item);
  console.log(shoppingCart.value)
}
</script>

<template>
  <header class="header" :class="{ dark: isDarkMode }">
    <span class="restaurantName">Umkoping Restaurant</span>
    <button @click="isDarkMode = !isDarkMode" class="theme-btn">
      {{ isDarkMode ? "☀️" : "🌙" }}
    </button>

    <button class="shopping-btn" @click="showCart= true">🛒</button>
  </header>
  <CustomerCart v-if="showCart" :shoppingCart="shoppingCart" @close="showCart=false"></CustomerCart>
  <main :class="{ dark: isDarkMode }">
    <p v-if="loading">loading...</p>
    <p v-else-if="error">{{ error }}</p>

    <div class="menuContainer" v-else>
      <h3 class="category-text">Pizza</h3>
      <div class="menuItemsContainer">
        <MenuCard :list="pizzaList" @buy="addItemToShoppingCart" :isDarkMode />
      </div>
      <h3 class="category-text">Salad</h3>
      <div class="menuItemsContainer">
        <MenuCard :list="saladList" :isDarkMode />
      </div>
      <h3 class="category-text">Drink</h3>
      <div class="menuItemsContainer">
        <MenuCard :list="drinkList" :isDarkMode />
      </div>
    </div>
    <!-- <button @click="useMenu">Hämta Meny</button> -->
  </main>

  <footer :class="{ dark: isDarkMode }">Kinda Programming</footer>
</template>

<style>
::before,
::after,
* {
  box-sizing: border-box;
  margin: 0;
}
.dark {
  background-color: rgb(40, 40, 40);
  color: white;
}
</style>

<style scoped>
header,
footer {
  margin: 0;
  height: 6rem;
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

main {
  padding: 3em;
}

h2 {
  margin-bottom: 2em;
}

h3 {
  margin-bottom: 1em;
}

.header {
  height: 120px;
  margin-bottom: 1em;
}

.menuTitle,
.category-text {
  font-size: 28px;
}

.restaurantName {
  font-size: 3.5em;
}

.menuContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  /* gap: 1rem; */
}

.menuItemsContainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 2em;
  gap: 10px;
  column-gap: 30px;
  padding-bottom: 3em;
  border-bottom: 5px solid rgb(171, 171, 110);
}

.theme-btn {
  padding: 0;
  border: none;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  font-size: 20px;
  border-radius: 50%;
  background-color: grey;
}

.theme-btn:hover {
  cursor: pointer;
}

.shopping-btn{
  font-size: 1.2rem;
}



@media (max-width: 1700px) {
  .menuItemsContainer {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1150px) {
  .menuItemsContainer {
    grid-template-columns: 1fr;
  }
}
</style>
