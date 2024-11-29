<script setup>
import DetailModal from "./DetailModal.vue";
import { ref } from "vue";

const { list } = defineProps({
  list: Array,
  isDarkMode: Boolean,
});

const isModalOpen = ref(false);
const selectedItem = ref(null);

const openModal = (item) => {
  isModalOpen.value = true;
  selectedItem.value = item;
};

const closeModal = () => {
  isModalOpen.value = false;
  // selectedItem.value = null;
};
</script>

<template>
  <div
    v-for="item in list"
    :key="item.id"
    class="meal-card"
    @click="openModal(item)"
  >
    <img :src="item.imgUrl" alt="" class="meal-img" />
    <div class="meal-card-text">
      <h3>{{ item.id }}. {{ item.name }}</h3>
      <p v-if="item.ingredients">
        <strong>Ingredients: </strong>

        <span v-for="(ingredient, index) in item.ingredients"
          ><span v-if="index === 0">{{ ingredient }}</span>
          <span v-else>, {{ ingredient }}</span>
        </span>
      </p>
      <p v-else-if="item.toppings">
        <strong>Topping: </strong>
        <span v-for="(ingredient, index) in item.toppings"
          ><span v-if="index === 0">{{ ingredient }}</span>
          <span v-else>, {{ ingredient }}</span>
        </span>
      </p>
    </div>
    <p class="meal-price">{{ item.price }}kr</p>
  </div>
  <DetailModal
    v-if="isModalOpen && selectedItem"
    :selectedItem="selectedItem"
    @close-modal="closeModal"
    :isDarkMode
  />
</template>

<style scoped>
.meal-card {
  width: 550px;
  border-bottom: 1px solid;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
}

.meal-img {
  height: 60px;
  align-self: center;
}

.meal-card-text {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.meal-card-text p {
  font-style: italic;
}

.meal-price {
  margin-left: auto;
}
</style>

<!-- namn, beskrivning, pris, ingredienser -->
