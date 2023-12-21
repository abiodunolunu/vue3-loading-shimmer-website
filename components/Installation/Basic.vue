<script setup lang="ts">
import { PACKAGE_NAME } from "~/CONSTANTS";

const cdnLinksRaw = `<script src="https://unpkg.com/vue"><\/script>
<script src='https://unpkg.com/${PACKAGE_NAME}'><\/script>
`;

const cdnCodeRegRaw = `<script>
const { createApp } = Vue;
const App = {
  //Component code...
};
const app = createApp(App);
app.component("${PACKAGE_NAME}", Vue3LoadingShimmer);
app.mount("#app");
<\/script>
`;

const cdnCodeUsageRaw = `<div>
  <${PACKAGE_NAME} class="my-class" />
</div>
`;

const cssRaw = `<style>
.my-class {
  height: 1rem;
  width: 100%;
}
</style>`;
</script>

<template>
  <div>
    <AnchorHeading text="Basic" hash="#basic" />
    <div class="mt-8 space-y-4">
      <p>
        If you want to use the package with a CDN, you need to include the CDN
        link inside a <CodeHighlight text="<script>" /> tag and then insert this
        tag into your HTML file:
      </p>

      <CodeBlock :code-raw="cdnLinksRaw" lang="html"></CodeBlock>

      <p>Next, you need to register the component.</p>

      <CodeBlock :code-raw="cdnCodeRegRaw" code-lang="xml"></CodeBlock>

      <p>
        After completing the steps to include the component in your project, you
        will be able to use it immediately. Here is an example of how to use it:
      </p>

      <CodeBlock :code-raw="cdnCodeUsageRaw" />

      <CodeBlock :code-raw="cssRaw" />
    </div>
  </div>
</template>

<style></style>
