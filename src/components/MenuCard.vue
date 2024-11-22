<script setup>
const { list } = defineProps({
  list: Array,
});
</script>

<template>
  <div v-for="item in list" :key="item.id" class="meal-card">
    <img :src="item.imgUrl" alt="" class="meal-img" />
    <div class="meal-card-text">
      <h4>{{ item.name }}</h4>
      <p>
        <i>{{ item.description }}</i>
      </p>
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
    <p>{{ item.price }}kr</p>
  </div>
</template>

<style scoped>
.meal-card {
  width: 550px;
  border-bottom: 1px solid;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
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
</style>

<!-- namn, beskrivning, pris, ingredienser -->
