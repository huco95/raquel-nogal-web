<template>
  <div class="block p-2 mb-8">
    <h2 class="text-xl font-bold">{{ post.title }}</h2>
    <p class="mt-2 font-medium text-justify text-gray-500">
      {{ post.description }}
    </p>
    <div class="flex items-center gap-4 mt-2">
      <NuxtLink
        :to="{ name: 'blog-slug', params: { slug: post.slug } }"
        class="px-2 py-1 font-bold text-black bg-gray-200 rounded hover:bg-gray-300"
      >
        Leer
      </NuxtLink>
      <p class="text-sm text-gray-500">{{ formatDate(post.createdAt) }}</p>
    </div>
  </div>
</template>

<script>
import dateMixin from '~/mixins/dateMixin.js';
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  mixins: [dateMixin],
};
</script>
