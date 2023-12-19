<script setup lang="ts">
import { PACKAGE_NAME } from "~/CONSTANTS";

useHead({
  title:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, culpa incidunt reprehenderit repellat vel amet esse, ea repudiandae nihil velit aliquam.",
  meta: [
    {
      name: "keywords",
      content: "keywords, keywords, keywords",
    },
    {
      name: "description",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, culpa incidunt reprehenderit repellat vel amet esse, ea repudiandae nihil velit aliquam. Possimus saepe velit porro voluptate. Cum, voluptas culpa. Quae.",
    },
    {
      property: "og:title",
      content: "Lorem ipsum dolor",
    },
    {
      property: "og:description",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, culpa incidunt reprehenderit repellat vel amet esse, ea repudiandae nihil velit aliquam. Possimus saepe velit porro voluptate. Cum, voluptas culpa. Quae.",
    },
  ],
});

definePageMeta({});

useHead({
  title: "package-name | package-name",
});
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
</script>

<template>
  <div class="">
    <h1 class="text-3xl font-medium text-center">package-name</h1>

    <div class="mt-8 space-y-8">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis,
        ipsam?
      </p>

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
        package-name is a
        <a
          target="_blank"
          href="https://vuejs.org/"
          class="text-app-emerald hover:underline hover:text-opacity-60"
          >Vue 3</a
        >
        component Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        doloremque quasi corrupti obcaecati. Dolorum architecto quibusdam
        commodi sed esse praesentium!
      </p>
    </div>

    <div class="mt-8">
      <AnchorHeading text="Features" hash="#Features" />

      <ul class="list-disc">
        <li v-for="i in 5" :key="i">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
          deleniti.
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
