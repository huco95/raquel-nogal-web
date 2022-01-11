<template>
  <div>
    <Header page-name="BLOG" />

    <div v-if="posts.length > 0" class="m-4">
      <BlogPostCard v-for="post of posts" :key="post.slug" :post="post" />
    </div>
    <div v-else class="m-4">
      <div>
        <p class="text-xl font-semibold text-center text-gray-600">
          🥺 Aún no hay posts publicados. 🥺
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogIndex',
  layout: 'content',
  async asyncData({ $content }) {
    let posts = [];
    try {
      posts = await $content('blog')
        .only(['title', 'description', 'createdAt', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch();
    } catch {}

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
