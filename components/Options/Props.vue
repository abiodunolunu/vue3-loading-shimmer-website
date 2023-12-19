<script setup lang="ts">
const propsTable = [
  {
    name: "Lorem",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo.",
    type: "String",
    default: "Ipsum",
  },
  {
    name: "Lorem",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo.",
    type: "Number",
    default: "42",
  },
  {
    name: "Lorem",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo.",
    type: "String",
    default: "Ipsum",
  },
  {
    name: "Lorem",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo.",
    type: "Number",
    default: "42",
  },
  {
    name: "Lorem",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo.",
    type: "String",
    default: "Ipsum",
  },
  {
    name: "Lorem",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo.",
    type: "Number",
    default: "42",
  },
  {
    name: "Lorem",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo.",
    type: "String",
    default: "Ipsum",
  },
  {
    name: "Lorem",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo.",
    type: "Number",
    default: "42",
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
              <th>Name</th>
              <th>Description</th>
              <th>Type</th>
              <th>Default</th>
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
