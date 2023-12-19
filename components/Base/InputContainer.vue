<script setup lang="ts">
interface Props {
  label?: string;
}
const props = defineProps<Props>();
</script>

<template>
  <div>
    <label v-if="label" class="text-sm block mb-1">{{ label }}</label>

    <slot />
  </div>
</template>

<style></style>
