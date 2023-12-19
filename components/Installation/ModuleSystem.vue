<script setup lang="ts">
const npmInstallRaw = `npm install package --save`;

const registerGloballyRaw = `import { createApp } from "vue";
import App from "./App.vue";
import Package from "package";

const app = createApp(App);

app.component("package", Package);
`;

const registerLocallyRaw = `import { defineComponent } from "vue";
import Package from "package";

export default defineComponent({
  components: {
    Package,
  },
});

const value = ref(42)
`;

const componentUsageRaw = `<template>
  <package v-model="value" />
</template>
`;
</script>

<template>
  <div>
    <AnchorHeading text="Module System" hash="#module-system" />
    <div class="mt-8 space-y-4">
      <p>
        To install the package package in your Vue.js project, you can use the
        following command:
      </p>

      <CodeBlock :code-raw="npmInstallRaw" code-lang="bash" />

      <p>
        This will download and install the package and save it to your
        <CodeHighlight text="package.json" /> file as a dependency.
      </p>

      <h3 class="font-semibold text-xl">Global Registration</h3>

      <p>
        Once the package is installed, you can register it globally in your
        Vue.js application by importing it and registering it as a component
        globally
      </p>

      <CodeBlock :code-raw="registerGloballyRaw" code-lang="js" />

      <p>
        After registering the component globally, you can use it in any
        component template in your application by referencing it with its tag
        name.
      </p>

      <CodeBlock :code-raw="componentUsageRaw" />

      <h3 class="font-semibold text-xl">Local Registration</h3>

      <p>
        Alternatively, you can register the component locally in a specific
        component by importing it and defining it in the
        <CodeHighlight text="components" /> components property of the component
        definition object.
      </p>

      <CodeBlock :code-raw="registerLocallyRaw" code-lang="js" />

      <p>
        After registering the component locally, you can use it in the template
        of that component by referencing it with its tag name.
      </p>

      <CodeBlock :code-raw="componentUsageRaw" />
    </div>
  </div>
</template>

<style></style>
