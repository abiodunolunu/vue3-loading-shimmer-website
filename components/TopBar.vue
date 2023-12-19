<script setup lang="ts">
import { Github, Menu } from "lucide-vue-next";
import { GITHUB_LINK, PACKAGE_NAME } from "~/CONSTANTS";
interface Props {
  sidebarOpen: boolean;
}
interface Emits {
  (e: "update:sidebarOpen", value: boolean): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <div
    class="border-b border-app-night border-opacity-20 flex items-center px-5"
  >
    <button
      @click="$emit('update:sidebarOpen', !sidebarOpen)"
      class="md:hidden mr-3"
      aria-label="menubutton"
    >
      <Menu :size="28" />
    </button>

    <p class="font-bold text-xl">
      {{ PACKAGE_NAME }}
    </p>

    <a
      :href="GITHUB_LINK"
      target="_blank"
      class="ml-auto text-base font-medium hidden md:flex items-center gap-2 hover:text-app-emerald"
    >
      <span> Github </span>
      <Github />
    </a>
  </div>
</template>

<style></style>
