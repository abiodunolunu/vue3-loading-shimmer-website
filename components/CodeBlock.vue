<script setup lang="ts">
import highlightjs from "highlight.js";
import { Copy } from "lucide-vue-next";

import "highlight.js/styles/atom-one-dark.css";

interface Props {
  codeRaw: string;
  codeLang?: string;
}
const props = withDefaults(defineProps<Props>(), {
  codeLang: "xml",
});

const { copy, copied } = useClipboard({ source: props.codeRaw });

const result = ref("");
const resultLanguage = ref();

onMounted(() => {
  const { value, language } = highlightjs.highlight(props.codeRaw, {
    language: props.codeLang,
  });

  result.value = value;
  resultLanguage.value = language;
});

const languageCSSClass = computed(() => {
  if (resultLanguage.value)
    return `language-${resultLanguage.value.toLowerCase()}`;
});
</script>

<template>
  <div
    :class="[
      languageCSSClass,
      'hljs text-sm px-4 py-3 relative group overflow-hidden rounded-md',
    ]"
  >
    <code class="whitespace-pre-wrap" v-html="result" />
    <button
      aria-label="copyButton"
      class="absolute inset-0 bg-black bg-opacity-0 flex justify-center items-center group-hover:bg-opacity-50"
      @click="copy()"
    >
      <span v-if="copied">Copied!</span>
      <Copy
        v-else
        class="stroke-app-light-grayish-blue h-5 w-5 opacity-0 group-hover:opacity-100"
      />
    </button>
    <span class="absolute top-2 right-2 text-gray-400 text-xs select-none">{{
      resultLanguage
    }}</span>
  </div>
</template>

<style></style>
