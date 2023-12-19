<script setup lang="ts"></script>

<template>
  <div>
    <InstallationBasic />

    <InstallationModuleSystem class="mt-12" />

    <PageNav
      class="mx-auto max-w-3xl"
      :backward-route="{
        name: 'Introduction',
        path: '/',
      }"
      :forward-route="{
        name: 'Options',
        path: '/options',
      }"
    />
  </div>
</template>

<style></style>
