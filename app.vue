<template>
  <NuxtPage />
  <AuthOverlay v-if="isLoginOpen" />
  <EditProfileOverlay v-if="isEditProfileOpen"/>
</template>
<script setup>

import { storeToRefs } from "pinia";
const { $generalStore } = useNuxtApp();
const { isLoginOpen, isEditProfileOpen } = storeToRefs($generalStore);

onMounted(async () => {

  $generalStore.bodySwitch(false);
  isLoginOpen.value = false;
  isEditProfileOpen.value = false;

  try {
    await $generalStore.hasSessionExpired();
  } catch (error) {
    console.log(error);
  }
});

watch(() => isLoginOpen.value, (val) => $generalStore.bodySwitch(val));
watch(() => isEditProfileOpen.value, (val) => $generalStore.bodySwitch(val));
</script>
