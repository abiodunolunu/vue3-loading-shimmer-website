<script setup lang="ts">
import { type InputHTMLAttributes } from "vue";

type Numberish = string | number;
interface Props {
  modelValue: Numberish;
  inputProps: InputHTMLAttributes;
}
interface Emits {
  (e: "update:modelValue", v: any): void;
}
const props = defineProps<Props>();
const emit = defineEmits<Emits>();

function handleInput(e: Event) {
  const target = e.target as HTMLInputElement;

  emit("update:modelValue", target.value);
}
</script>

<template>
  <input
    :class="[
      inputProps.type === 'color' ? 'px-0' : 'px-4',
      'w-full h-10 rounded-sm border border-gray-200 outline-none hover:border-app-emerald hover:border-opacity-50 focus:ring-4 focus:ring-app-emerald focus:ring-opacity-30',
    ]"
    v-bind="inputProps"
    :value="modelValue"
    @input="handleInput"
  />
</template>

<style></style>
