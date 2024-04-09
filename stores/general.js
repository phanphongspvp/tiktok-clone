import { defineStore } from "pinia";
import axios from "~/plugins/axios";
import { useUserStore } from "./user";
const $axios = axios().provide.axios;

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
  actions: {
    bodySwitch(val) {
      if (val) {
        document.body.style.overflow = "hidden";
        return;
      }
      document.body.style.overflow = "visible";
    },
    async hasSessionExpired() {
      await axios.interceptors.response.use(
        (response) => {
          // Call was successful, continue.
          return response;
        },
        (error) => {
          switch (error.response.status) {
            case 401: //Not Logged in
            case 419: //Session expired
            case 503: //Down for maintenance
              useUserStore().resetUser();
              window.location.href = "/";
              break;
            case 500:
              alert("Oops, something went wrong! The team has been notified.");
              break;
            default:
              return Promise.reject(error);
          }
        }
      );
    },
  },
  persist: true,
});
