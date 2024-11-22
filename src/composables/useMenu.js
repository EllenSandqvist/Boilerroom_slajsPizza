import axios from "axios";
import { ref, onMounted } from "vue";

const replaceImg = {
  Greeksalad: "https://images.unsplash.com/photo-1529059997568-3d847b1154f0",
  Caesarsalad: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9",
  Italiansalad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  Shrimpsalad: "https://images.unsplash.com/photo-1551248429-40975aa4de74",
  Sprite: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3",
  Fantaorange: "https://images.unsplash.com/photo-1624517452488-04869289c4ca",
  Cocacola: "https://images.unsplash.com/photo-1554866585-cd94860890b7",
  Bubblewater: "https://images.unsplash.com/photo-1523362628745-0c100150b504",
};

// const drinksImg = {
//   Sprite: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3",
//   Fantaorange: "https://images.unsplash.com/photo-1624517452488-04869289c4ca",
//   Cocacola: "https://images.unsplash.com/photo-1554866585-cd94860890b7",
//   Bubblewater: "https://images.unsplash.com/photo-1523362628745-0c100150b504",
// };

export function useMenu() {
  const loading = ref(false);
  const data = ref([]);
  const error = ref(null);

  async function fetchData() {
    loading.value = true;
    axios
      .get("https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com/menu", {
        headers: { "x-zocom": import.meta.env.VITE_API_KEY },
      })
      .then((response) => {
        for (const item of response.data.items) {
          if (
            item.imgUrl ==
            "https://slajs-assets.s3.eu-north-1.amazonaws.com/no-image.png"
          ) {
            const imgName = item.name.replace(" ", "");
            item.imgUrl = replaceImg[imgName];
          }
          // if (item.type === "drink") {
          //   const imgName = item.name.replace(" ", "");
          //   item.imgUrl = drinksImg[imgName];
          // }
        }
        data.value = response.data.items;
      })
      .catch((err) => {
        console.log(err);
        error.value = err;
      })
      .finally(() => (loading.value = false));
  }
  onMounted(fetchData);

  return { data, loading, error, refetch: fetchData };
}
