<script setup lang="ts">
import { PACKAGE_NAME } from "~/CONSTANTS";
</script>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      raw: `
<template>
  <div class="text">hello</div>
</template>


<style>
.text {
  color: v-bind(color);
}
</style>

<script>
export default {
  data() {
    return {
      color: 'red'
    }
  }
}
<\/script>
`,
    };
  },
});

const features = [
  "Customizable background color",
  "Customizable shimmer color",
  "Customizable time duration",
  "Customizable direction",
];
</script>

<template>
  <div class="">
    <h1 class="text-3xl font-medium text-center">vue3-loading-shimmer</h1>

    <div class="mt-8 space-y-8">
      <p>A customizable Vue 3 component for creating loading shimmer effects</p>

      <div class="flex gap-2 justify-center flex-wrap">
        <img
          alt="npm"
          :src="`https://img.shields.io/npm/dy/${PACKAGE_NAME}?style=plastic`"
        />

        <img
          alt="npm bundle size"
          :src="`https://img.shields.io/bundlephobia/min/${PACKAGE_NAME}`"
        />

        <img
          alt="npm bundle size"
          :src="`https://img.shields.io/bundlephobia/minzip/${PACKAGE_NAME}`"
        />
      </div>

      <p
        class="border-l-[3px] border-app-light-grayish-blue pl-4 text-app-night text-opacity-80"
      >
        {{ PACKAGE_NAME }} is a
        <a
          target="_blank"
          href="https://vuejs.org/"
          class="text-app-emerald hover:underline hover:text-opacity-60"
          >Vue 3</a
        >
        component designed to enhance user experience by adding dynamic loading
        screens and structures to your web app. This lightweight component is
        perfect for creating visually appealing placeholders while your content
        is being fetched or processed, creating a seamless and polished feel for
        your users.
      </p>
    </div>

    <div class="mt-8">
      <AnchorHeading text="Features" hash="#Features" />

      <ul class="list-disc mt-2">
        <li v-for="feat in features" :key="feat">
          {{ feat }}
        </li>
      </ul>
    </div>

    <PageNav
      class="mx-auto max-w-3xl"
      :forward-route="{
        name: 'Installation',
        path: '/installation',
      }"
    />
  </div>
</template>

<style></style>
