<script setup lang="ts">
import { GITHUB_LINK } from "@/CONSTANTS";
import { Github } from "lucide-vue-next";

import Vue3Collapse from "vue3-collapse";
const currentRoute = useRoute();

const routes: Array<{
  path: string;
  name: string;
  children?: Array<{
    hash: string;
    name: string;
  }>;
}> = [
  {
    path: "/",
    name: "Introduction",
  },
  {
    path: "/installation",
    name: "Installation",
    children: [
      {
        hash: "#basic",
        name: "Basic",
      },
      {
        hash: "#module-system",
        name: "Module System",
      },
    ],
  },
  {
    path: "/options",
    name: "Options",
    children: [
      {
        hash: "#v-model",
        name: "v-model",
      },
      {
        hash: "#props",
        name: "Props",
      },
    ],
  },
  {
    path: "/demo",
    name: "Demo",
    children: [],
  },
];

function activeAnchor(hash: string) {
  return hash === currentRoute.hash;
}

function goToHash(hash: string) {
  const element = document.querySelector(hash)!;
  scrollToElement(element);
}
</script>

<template>
  <div
    class="w-[16rem] overflow-auto border-x border-app-night border-opacity-20 bg-white"
  >
    <a
      :href="GITHUB_LINK"
      target="_blank"
      class="w-full text-base font-medium flex items-center gap-2 mt-8 py-1 pl-5 hover:text-app-emerald md:hidden"
    >
      <span> Github </span>
      <Github />
    </a>
    <div class="space-y-4 mt-8">
      <ClientOnly>
        <div v-for="route in routes" :key="route.name">
          <NuxtLink
            :to="route.path"
            class="parent-route block border-l-4 border-transparent py-2 pl-4 text-lg font-bold hover:text-app-emerald hover:underline"
            >{{ route.name }}</NuxtLink
          >

          <Vue3Collapse
            :model-value="route.path === currentRoute.path"
            v-if="route.children && route.children.length"
          >
            <div class="pl-8 space-y-0.5">
              <NuxtLink
                :to="{ path: route.path, hash: childRoute.hash }"
                class="block"
                :class="{
                  'text-app-emerald': activeAnchor(childRoute.hash),
                }"
                v-for="childRoute in route.children"
                :key="childRoute.name"
                @click="goToHash(childRoute.hash)"
              >
                {{ childRoute.name }}
              </NuxtLink>
            </div>
          </Vue3Collapse>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<style>
.parent-route.router-link-exact-active {
  @apply text-app-emerald  border-app-emerald;
}
</style>
