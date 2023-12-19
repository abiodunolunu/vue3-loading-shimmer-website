<script setup lang="ts">
import { ArrowLeft, ArrowRight } from "lucide-vue-next";
type TRoute = {
  name: string;
  path: string;
};

interface Props {
  forwardRoute?: TRoute;
  backwardRoute?: TRoute;
}

const props = defineProps<Props>();

const linksAvailable = computed(() => {
  if (props.forwardRoute && props.backwardRoute) return "both";
  else if (props.forwardRoute) return "forward-only";
  else return "backward-only";
});
</script>

<template>
  <div class="border-t-2 border-app-light-grayish-blue py-4 my-5">
    <div
      class="flex items-center text-app-emerald"
      :class="{
        'justify-between': linksAvailable === 'both',
        'justify-start': linksAvailable === 'backward-only',
        'justify-end': linksAvailable === 'forward-only',
      }"
    >
      <NuxtLink
        v-if="backwardRoute"
        :to="backwardRoute.path"
        class="flex items-center gap-2 hover:underline"
      >
        <ArrowLeft :size="16" class="text-app-night" /> {{ backwardRoute.name }}
      </NuxtLink>
      <NuxtLink
        v-if="forwardRoute"
        :to="forwardRoute.path"
        class="flex items-center gap-2 hover:underline"
      >
        {{ forwardRoute.name }}
        <ArrowRight :size="16" class="text-app-night" />
      </NuxtLink>
    </div>
  </div>
</template>

<style></style>
