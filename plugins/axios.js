import axios from "axios";

export default defineNuxtPlugin(() => {
  const apiClient = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
    withXSRFToken: true,
  });

  return {
    provide: {
      axios: apiClient,
    },
  };
});
