<template>
  <div class="block p-2 mb-8">
    <h2 class="text-xl font-bold">{{ item.title }}</h2>
    <p class="mt-2 font-medium text-justify text-gray-500">
      {{ item.description }}
    </p>
    <div class="flex items-center gap-4 mt-2">
      <a
        :href="item.link"
        target="_blank"
        class="px-2 py-1 font-bold text-black bg-gray-200 rounded hover:bg-gray-300"
      >
        Leer
      </a>
      <p class="text-sm text-gray-500">
        {{ item.publisher }} · {{ item.date }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
