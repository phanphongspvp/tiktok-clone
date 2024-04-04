import axios from "axios";

export default defineNuxtPlugin(() => {
  const apiClient = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
  });

  return {
    provide: {
      axios: apiClient,
    },
  };
});
