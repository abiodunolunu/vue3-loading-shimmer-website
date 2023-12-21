<script setup lang="ts">
import { Code, Eye } from "lucide-vue-next";

const whatToDisplay = ref<"preview" | "code">("preview");
</script>

<template>
  <div>
    <div
      class="grid grid-cols-2 bg-app-light-grayish-blue p-[3px] rounded-lg w-max ml-auto text-xs"
    >
      <button
        :class="[
          whatToDisplay === 'preview'
            ? 'bg-app-emerald text-white shadow-md'
            : 'text-app-night',
          'flex items-center gap-2 justify-center px-2 py-1 rounded-md',
        ]"
        @click="whatToDisplay = 'preview'"
      >
        <Code class="h-4 w-4 stroke-current" /> Preview
      </button>
      <button
        :class="[
          whatToDisplay === 'code'
            ? 'bg-app-emerald text-white shadow-md'
            : 'text-app-night',
          'flex items-center gap-2 justify-center px-2 py-1 rounded-md',
        ]"
        @click="whatToDisplay = 'code'"
      >
        <Eye class="h-4 w-4 stroke-current" /> Code
      </button>
    </div>

    <div class="mt-4">
      <div
        v-show="whatToDisplay === 'preview'"
        class="border border-gray-300 px-4 py-5 rounded-md shadow-sm shadow-gray-200"
      >
        <slot name="preview" />
      </div>

      <div v-show="whatToDisplay === 'code'">
        <slot name="code" />
      </div>
    </div>

    <div />
  </div>
</template>

<style></style>
