<script setup lang="ts">
interface Props {
  modelValue: boolean;
}
interface Emits {
  (e: "update:modelValue", v: boolean): void;
}
const props = defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<template>
  <button
    :class="[
      modelValue ? 'bg-app-emerald' : 'bg-gray-300',
      'rounded-full relative h-10 duration-500',
    ]"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <span
      :class="[
        modelValue
          ? 'left-[calc(100%-36px)] bg-white'
          : 'left-2 bg-app-emerald',
        'block h-7 w-7 rounded-full absolute top-[6px] duration-500',
      ]"
    ></span>
  </button>
</template>

<style></style>
