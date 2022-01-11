<template>
  <div>
    <Header page-name="PORTFOLIO" />

    <div>
      <PortfolioItem v-for="item in portfolio" :key="item.title" :item="item" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioPage',
  layout: 'content',
  asyncData: async ({ $content }) => {
    const portfolio = await $content('portfolio').fetch();

    return { portfolio: portfolio.portfolio };
  },
};
</script>
