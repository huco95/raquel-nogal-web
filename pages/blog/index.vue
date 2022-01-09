<template>
  <div class="mx-4 mt-4">
    <div
      class="flex flex-wrap items-center justify-center mx-2 mb-2 sm:justify-between"
    >
      <h1 class="mr-4 text-5xl font-bold leading-tight font-kalam">BLOG</h1>
      <Menu />
    </div>

    <div class="m-4">
      <BlogPostCard v-for="post of posts" :key="post.slug" :post="post" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogIndex',
  async asyncData({ $content, params }) {
    const posts = await $content('blog')
      .only(['title', 'description', 'createdAt', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch();

    return { posts };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('es', options);
    },
  },
};
</script>
