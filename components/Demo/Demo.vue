<script setup lang="ts">
const rating = ref(3.5);
import Vue3StarRatings from "vue3-star-ratings";

const compProps = reactive({
  starSize: 32,
  starColor: "#ff9800",
  inactiveColor: "#333333",
  numberOfStars: 5,
  step: 0.5,
  controlBg: "#2e5090",
  controlColor: "#ffffff",
  controlSize: "24",
  showControl: true,
  disableClick: false,
});

const raw = computed(() => {
  const { starSize, starColor, inactiveColor, numberOfStars, disableClick } =
    compProps;

  return `<Vue3StarRatings 
   v-model="rating"
   :starSize="${starSize}"
   starColor="${starColor}"
   inactiveColor="${inactiveColor}"
   :numberOfStars="${numberOfStars}"
   :disableClick="${disableClick}" 
  />
`;
});
</script>

<template>
  <div class="space-y-8">
    <CodePreviwer>
      <template #preview>
        <div class="flex justify-center">
          <ClientOnly>
            <Vue3StarRatings v-bind="{ ...compProps }" v-model="rating" />
          </ClientOnly>
        </div>
      </template>
      <template #code>
        <CodeBlock :codeRaw="raw" codeLang="js" :key="raw" />
      </template>
    </CodePreviwer>

    <div
      class="grid grid-cols-2 md:grid-cols-3 gap-5 border border-b-4 p-5 rounded-lg mt-8"
    >
      <BaseInputContainer label="Number of stars:">
        <BaseInput
          v-model.number="compProps.numberOfStars"
          :input-props="{
            placeholder: 'Abeydev',
            type: 'number',
            min: 1,
          }"
        />
      </BaseInputContainer>
      <BaseInputContainer label="Star size:">
        <BaseInput
          v-model="compProps.starSize"
          :input-props="{
            placeholder: 'Abeydev',
            type: 'number',
            min: 1,
          }"
        />
      </BaseInputContainer>
      <BaseInputContainer label="Star color:">
        <BaseInput
          v-model="compProps.starColor"
          :input-props="{
            placeholder: 'Abeydev',
            type: 'color',
          }"
        />
      </BaseInputContainer>
      <BaseInputContainer label="Inactive color:">
        <BaseInput
          v-model="compProps.inactiveColor"
          :input-props="{
            placeholder: 'Abeydev',
            type: 'color',
          }"
        />
      </BaseInputContainer>
      <BaseInputContainer label="Disable click:">
        <BaseSwitch
          v-model="compProps.disableClick"
          class="w-full"
          :size="'md'"
        />
      </BaseInputContainer>
    </div>
  </div>
</template>

<style></style>
