<script setup>
const props = defineProps({
  selectedItem: Object,
});

const emit = defineEmits(["close-modal"]);
</script>

<template>
  <div class="modal-bg" @click="emit('close-modal')">
    <div class="modal-content" @click.stop>
      <img
        :src="selectedItem.imgUrl"
        alt="selectedItem.name"
        class="meal-img"
      />
      <h2>{{ selectedItem.name }}</h2>
      <p>
        <i>{{ selectedItem.description }}</i>
      </p>
      <p v-if="selectedItem.ingredients">
        <strong>Ingredients: </strong>

        <span v-for="(ingredient, index) in selectedItem.ingredients"
          ><span v-if="index === 0">{{ ingredient }}</span>
          <span v-else>, {{ ingredient }}</span>
        </span>
      </p>
      <p v-else-if="selectedItem.toppings">
        <strong>Topping: </strong>
        <span v-for="(ingredient, index) in selectedItem.toppings"
          ><span v-if="index === 0">{{ ingredient }}</span>
          <span v-else>, {{ ingredient }}</span>
        </span>
      </p>
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

.meal-img {
  height: 300px;
  align-self: center;
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
</style>
