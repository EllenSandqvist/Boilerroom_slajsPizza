<script setup>
import { computed, ref } from "vue";
import { useMenu } from "./composables/useMenu.js";
import MenuCard from "./components/MenuCard.vue";

const { data, loading, error } = useMenu();

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
</script>

<template>
  <header :class="{ dark: isDarkMode }">
    <span class="restaurantName">Umkoping Restaurant</span>
    <button @click="isDarkMode = !isDarkMode" class="theme-btn">
      {{ isDarkMode ? "☀️" : "🌙" }}
    </button>
  </header>

  <main :class="{ dark: isDarkMode }">
    <h2>Menu</h2>
    <p v-if="loading">loading...</p>
    <p v-else-if="error">{{ error }}</p>

    <div class="menuContainer" v-else>
      <h3>Pizza's</h3>
      <div class="menuItemsContainer">
        <MenuCard :list="pizzaList" :isDarkMode />
      </div>
      <h3>Salads</h3>
      <div class="menuItemsContainer">
        <MenuCard :list="saladList" :isDarkMode />
      </div>
      <h3>Drinks</h3>
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
  height: 4rem;
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

main {
  padding: 1em;
}

h2 {
  margin-bottom: 2em;
}

h3 {
  margin-bottom: 1em;
}

.restaurantName {
  font-size: 32px;
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
