<script setup lang="ts">
const vModelExampleRaw = `<!-- MyComponent.vue -->
<template>
  <package-name v-model="value" />
</template>

<script>
import { defineComponent } from "vue";
import PackageName from "package-name";

export default defineComponent({
  components: {
    PackageName,
  },
  data() {
    return {
      value: 4.5,
    };
  },
});
<\/script>

`;

const vModelExampleCompositionAPI = `<!-- MyComponent.vue -->
<template>
  <package-name v-model="value" />
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import PackageName from "package-name";

export default defineComponent({
  components: {
    PackageName,
  },
  setup() {
    const value = ref(4.2);

    return {
      rating,
    };
  },
});
<\/script>

`;

const showOptions = ref(true);
</script>

<template>
  <div>
    <AnchorHeading text="v-model" hash="#v-model" />
    <div class="mt-8 space-y-4">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
        doloremque aliquid similique dicta corrupti at quia quidem dolore
        voluptates modi quaerat amet repellendus optio soluta sequi veniam
        labore, delectus iure reiciendis autem in aperiam. Ratione dignissimos,
        quaerat quo inventore dolorem quod omnis.
      </p>

      <div class="flex items-center gap-4">
        <p>Composition API</p>
        <BaseSwitch v-model="showOptions" class="w-20" />
        <p>Options</p>
      </div>
      <!-- <CodeBlock :code-raw="" /> -->

      <CodeBlock
        :code-raw="vModelExampleRaw"
        code-lang="xml"
        v-if="showOptions"
      />

      <CodeBlock
        :code-raw="vModelExampleCompositionAPI"
        code-lang="xml"
        v-else
      />
    </div>
  </div>
</template>

<style></style>
