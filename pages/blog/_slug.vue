<template>
  <div>
    <a
      href="/blog"
      class="flex items-center gap-2 font-bold text-primary hover:underline"
    >
      <span>
        <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      Volver
    </a>

    <article class="mx-4 mt-4">
      <p class="text-sm text-center text-gray-500">
        {{ formatDate(post.createdAt) }}
      </p>
      <h1 class="mt-2 text-4xl text-center text-gray-700">{{ post.title }}</h1>

      <nuxt-content :document="post" />

      <BlogPrevNext
        :prev="prev"
        :next="next"
        class="pt-8 border-t border-gray-200"
      />
    </article>
  </div>
</template>

<script>
import dateMixin from '~/mixins/dateMixin.js';
export default {
  layout: 'content',
  async asyncData({ $content, params }) {
    const post = await $content('blog', params.slug).fetch();

    const [prev, next] = await $content('blog')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch();

    return { post, prev, next };
  },
  mixins: [dateMixin],
};
</script>
