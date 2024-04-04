import { useUserStore } from "~/stores/user";
import { useProfileStore } from "~/stores/profile";
import { useGeneralStore } from "~/stores/general";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      userStore: useUserStore(),
      profileStore: useProfileStore(),
      generalStore: useGeneralStore(),
    },
  };
});
