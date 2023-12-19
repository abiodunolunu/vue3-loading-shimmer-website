<script setup lang="ts">
interface Props {
  text: string;
}
const props = defineProps<Props>();
</script>

<template>
  <code
    class="bg-app-light-grayish-blue text-app-night px-3 py-1 text-sm rounded"
    >{{ text }}</code
  >
</template>

<style></style>
