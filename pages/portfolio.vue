<template>
  <div class="mx-4 mt-4">
    <div
      class="flex flex-wrap items-center justify-center mx-2 mb-2 sm:justify-between"
    >
      <h1 class="mr-4 text-5xl font-bold leading-tight font-kalam">
        PORTFOLIO
      </h1>
      <Menu />
    </div>

    <div>
      <PortfolioItem v-for="item in portfolio" :key="item.title" :item="item" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioPage',
  asyncData: async ({ $content }) => {
    const portfolio = await $content('portfolio').fetch();

    return { portfolio: portfolio.portfolio };
  },
};
</script>
