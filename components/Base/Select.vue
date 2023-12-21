<script setup lang="ts">
import { type SelectHTMLAttributes } from "vue";

type Numberish = string | number;
interface Props {
  selectProps?: SelectHTMLAttributes;
  options: { label: string; value: string }[];
}

const props = defineProps<Props>();

const modelValue = defineModel<string>();
</script>

<template>
  <select
    :class="[
      'px-4 w-full h-10 rounded-sm border border-gray-200 outline-none hover:border-app-emerald hover:border-opacity-50 focus:ring-4 focus:ring-app-emerald focus:ring-opacity-30',
    ]"
    v-bind="selectProps"
    v-model="modelValue"
  >
    <option v-for="{ label, value } in options" :key="value" :value="value">
      {{ label }}
    </option>
  </select>
</template>

<style></style>
