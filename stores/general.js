import { defineStore } from "pinia";

export const useGeneralStore = defineStore("general", {
  state: () => ({
    isLoginOpen: false,
    isEditProfileOpen: false,
    selectPost: false,
    ids: null,
    isBackUrl: "/",
    posts: null,
    suggested: null,
    following: null,
  }),
  actions: {},
  persist: true,
});
