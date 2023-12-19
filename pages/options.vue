<script setup lang="ts"></script>

<template>
  <div>
    <OptionsVModel />
    <OptionsProps class="mt-12" />

    <PageNav
      class="mx-auto max-w-3xl"
      :backward-route="{
        name: 'Installation',
        path: '/installation',
      }"
      :forward-route="{
        name: 'Demo',
        path: '/demo',
      }"
    />
  </div>
</template>

<style></style>
