<script setup lang="ts">
interface Props {
  size?: "small" | "large";
  text: string;
  hash?: string;
  hasBorder?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  size: "large",
  hash: "",
  hasBorder: true,
});
</script>

<template>
  <div
    class="pb-2 font-medium group relative"
    :class="{
      'text-base': size === 'small',
      'text-2xl': size === 'large',
      'border-b border-app-light-grayish-blue': hasBorder,
    }"
  >
    <a
      @click="scrollToElement($event.target as HTMLElement)"
      v-if="hash"
      :href="hash"
      :id="hash.replace('#', '')"
      class="text-app-emerald opacity-0 group-hover:opacity-100 hover:underline absolute -left-6"
      >#</a
    >
    {{ text }}
  </div>
</template>

<style></style>
