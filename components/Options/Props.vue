<script setup lang="ts">
const propsTable = [
  {
    name: "bgColor",
    description: "Background color of the wrapper",
    type: "String",
    default: "#d3d3d3",
    required: false,
  },
  {
    name: "shimmerColor",
    description:
      'Color of the shimmer effect (**MUST BE IN HEX-FORMAT**) e.g: "#RRGGBB" or "#RGB"',
    type: "String",
    default: "#ffffff",
    required: false,
  },
  {
    name: "duration",
    description: "Duration of the shimmer animation in milliseconds",
    type: "Number",
    default: 1400,
    required: false,
  },
  {
    name: "direction",
    description: "Direction of the shimmer effect",
    type: '"left-to-right", "right-to-left", "top-to-bottom", "bottom-to-top"',
    default: "left-to-right",
    required: false,
  },
];
</script>

<template>
  <div>
    <AnchorHeading text="Props" hash="#props" />
    <div class="mt-8 space-y-4">
      <p>
        You can customize the component by taking a look at the props table
        below.
      </p>

      <div class="overflow-auto">
        <table>
          <thead class="text-left">
            <tr>
              <th>Prop</th>
              <th>Description</th>
              <th>Type</th>
              <th>Default</th>
              <th>Required</th>
            </tr>
          </thead>

          <tbody class="text-left">
            <tr
              v-for="(prop, idx) in propsTable"
              :key="prop.name"
              :class="[
                idx % 2 === 0 ? 'bg-app-light-grayish-blue' : 'bg-white',
              ]"
            >
              <td class="py-4 px-4">{{ prop.name }}</td>
              <td>{{ prop.description }}</td>
              <td>{{ prop.type }}</td>
              <td>{{ prop.default }}</td>
              <td>{{ prop.required }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
td,
th {
  @apply border border-gray-300 px-4 py-2;
}
</style>
