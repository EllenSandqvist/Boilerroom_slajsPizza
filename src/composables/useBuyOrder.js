import axios from "axios";
import { ref, onMounted } from "vue";

export function useBuyOrder() {
  const loading = ref(false);
  const data = ref();
  const error = ref(null);

  async function postData(phone, items) {
    loading.value = true;
    axios
      .post(
        "https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com/orders",
        { items: items, customerTel: phone },
        {
          headers: {
            "x-zocom": import.meta.env.VITE_API_KEY,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        localStorage.setItem("lastOderID", response.data.order.id);
        data.value = response.data;
      })
      .catch((err) => {
        console.log(err);
        error.value = err;
      })
      .finally(() => (loading.value = false));
  }

  return { data, loading, error, sendOrder: postData };
}
