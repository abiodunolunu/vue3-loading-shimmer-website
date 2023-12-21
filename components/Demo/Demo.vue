<script setup lang="ts">
const rating = ref(3.5);
import Shimmer from "vue3-loading-shimmer";

const directionOptions = [
  "left-to-right",
  "right-to-left",
  "top-to-bottom",
  "bottom-to-top",
].map((v) => {
  return {
    label: v.split("-").join(" "),
    value: v,
  };
});

const compProps = reactive({
  bgColor: "#d3d3d3",
  shimmerColor: "#ffffff",
  duration: 1400,
  direction: "left-to-right" as
    | "left-to-right"
    | "right-to-left"
    | "top-to-bottom"
    | "bottom-to-top",
});

const exampleRaw = computed(() => {
  const { bgColor, shimmerColor, duration, direction } = compProps;

  return `<script setup>
  import Shimmer from "vue3-loading-shimmer";
<\/script>

<template>
  <div class="example">
    <Shimmer class="preview"
    bgColor="${bgColor}"
    :shimmerColor="${shimmerColor}"
    :duration="${duration}"
    direction="${direction}"/>
      <div class="details">
        <Shimmer class="avatar"
        bgColor="${bgColor}"
        :shimmerColor="${shimmerColor}"
        :duration="${duration}"
        direction="${direction}"/>
         <div class="author-stats">
            <Shimmer class="author"
            bgColor="${bgColor}"
            :shimmerColor="${shimmerColor}"
            :duration="${duration}"
            direction="${direction}"/>
            <Shimmer class="stats"
            bgColor="${bgColor}"
            :shimmerColor="${shimmerColor}"
            :duration="${duration}"
            direction="${direction}"/>
          </div>
      </div>
   </div>
</template>


<style>
.preview {
  width: 320px;
  aspect-ratio: 2 / 1;
  border-radius: 0.25rem;
}

.details {
  padding: 1rem 0;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem;
}

.avatar {
  height: 36px;
  width: 36px;
  border-radius: 50%;
}

.author,
.stats {
  height: 1.25rem;
  border-radius: 0.25rem;
}

.stats {
  margin-top: 0.5rem;
  width: 70%;
}
</style>

`;
});
</script>

<template>
  <div class="space-y-8">
    <CodePreviewer>
      <template #preview>
        <div>
          <div class="flex justify-center">
            <div class="example">
              <Shimmer
                class="preview"
                :shimmer-color="compProps.shimmerColor"
                :duration="compProps.duration"
                :bg-color="compProps.bgColor"
                :direction="compProps.direction"
              />
              <div class="details">
                <Shimmer
                  class="avatar"
                  :shimmer-color="compProps.shimmerColor"
                  :duration="compProps.duration"
                  :bg-color="compProps.bgColor"
                  :direction="compProps.direction"
                ></Shimmer>
                <div>
                  <Shimmer
                    class="author"
                    :shimmer-color="compProps.shimmerColor"
                    :duration="compProps.duration"
                    :bg-color="compProps.bgColor"
                    :direction="compProps.direction"
                  />
                  <Shimmer
                    class="stats"
                    :shimmer-color="compProps.shimmerColor"
                    :duration="compProps.duration"
                    :bg-color="compProps.bgColor"
                    :direction="compProps.direction"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #code>
        <CodeBlock :codeRaw="exampleRaw" codeLang="xml" :key="exampleRaw" />
      </template>
    </CodePreviewer>

    <div
      class="grid grid-cols-2 md:grid-cols-3 gap-5 border border-b-4 p-5 rounded-lg mt-8"
    >
      <BaseInputContainer label="Background color:">
        <BaseInput
          v-model.number="compProps.bgColor"
          :input-props="{
            placeholder: 'Abeydev',
            type: 'color',
            min: 1,
          }"
        />
      </BaseInputContainer>
      <BaseInputContainer label="Shimmer color:">
        <BaseInput
          v-model="compProps.shimmerColor"
          :input-props="{
            type: 'color',
          }"
        />
      </BaseInputContainer>
      <BaseInputContainer label="Duration (ms):">
        <BaseInput
          v-model="compProps.duration"
          :input-props="{
            placeholder: 'Abeydev',
            type: 'number',
          }"
        />
      </BaseInputContainer>
      <BaseInputContainer label="Direction:">
        <BaseSelect :options="directionOptions" v-model="compProps.direction" />
      </BaseInputContainer>
    </div>
  </div>
</template>

<style scoped>
.preview {
  width: 320px;
  aspect-ratio: 2 / 1;
  border-radius: 0.25rem;
}

.details {
  padding: 1rem 0;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem;
}

.avatar {
  height: 36px;
  width: 36px;
  border-radius: 50%;
}

.author,
.stats {
  height: 1.25rem;
  border-radius: 0.25rem;
}

.stats {
  margin-top: 0.5rem;
  width: 70%;
}
</style>
