import { defineStore } from "pinia";
import axios from "~/plugins/axios";

const $axios = axios().provide.axios;

export const useUserStore = defineStore("user", {
  state: () => ({
    id: "",
    name: "",
    bio: "",
    image: "",
  }),
  actions: {
    async getTokens() {
      await $axios.get("/sanctum/csrf-cookie");
    },
    async login(email, password) {
      await $axios.post("/login", {
        email,
        password,
      });
    },
    async register(name, email, password, confirmPassword) {
      await $axios.post("register", {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      });
    },
    async logout() {
      await $axios.post("/logout");
      this.resetUser();
    },
    async createPost(data) {
      return await $axios.post("/api/posts", data)
    },
    async getUser() {
      let res = await $axios.get("/api/logged-in-user");

      console.log(res);

      this.$state.id = res.data[0].id;
      this.$state.name = res.data[0].name;
      this.$state.bio = res.data[0].bio;
      this.$state.image = res.data[0].image;
    },
    resetUser() {
      this.$state.id = "";
      this.$state.name = "";
      this.$state.email = "";
      this.$state.bio = "";
      this.$state.image = "";
    },
  },
  persist: true,
});
