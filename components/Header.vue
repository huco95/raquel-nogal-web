<template>
  <div
    class="flex flex-wrap items-center justify-center mx-2 mb-2 sm:justify-between"
  >
    <h1 class="mr-4 text-5xl font-bold leading-tight font-kalam">
      {{ pageName }}
    </h1>
    <Menu />
  </div>
</template>

<script>
export default {
  name: 'RaquelMenu',
  props: {
    pageName: {
      type: String,
      required: true,
    },
  },
};
</script>
