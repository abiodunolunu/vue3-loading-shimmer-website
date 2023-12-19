<script setup lang="ts">
const showSidebar = ref(true);

const handleClick = () => {
  if (showSidebar.value) {
    showSidebar.value = !showSidebar.value;
  }
};
</script>

<template>
  <div id="__layout" class="grid grid-rows-[auto,1fr]">
    <TopBar class="col-span-full h-[3rem]" v-model:sidebar-open="showSidebar" />
    <div class="content__grid">
      <Sidebar
        class="fixed h-full duration-500 md:translate-x-0 md:static z-10"
        :class="{
          'translate-x-0': showSidebar,
          '-translate-x-full': !showSidebar,
        }"
      />

      <main
        class="h-full w-full mx-auto py-8 overflow-auto"
        id="main"
        @click="handleClick()"
      >
        <div class="mx-auto max-w-3xl px-10">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
.content__grid {
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;

  @screen md {
    grid-template-columns: auto 1fr;
  }
}
</style>
