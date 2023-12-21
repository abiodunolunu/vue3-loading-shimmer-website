<script setup lang="ts">
useHead({
  title: "vue3-loading-shimmer | Loading placeholders for your vue apps",
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/ico",
      href: "/favicon.ico",
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
    },
  ],

  meta: [
    {
      name: "keywords",
      content: "loading, skeleton, shimmer, vue-loading",
    },
    {
      name: "description",
      content: "vue3-loading-shimmer | Loading placeholders for your vue apps",
    },
    {
      property: "og:title",
      content: "vue3-loading-shimmer",
    },
    {
      property: "og:description",
      content: "vue3-loading-shimmer | Loading placeholders for your vue apps",
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
#__nuxt {
  @apply text-app-night font-lato;
}
</style>
