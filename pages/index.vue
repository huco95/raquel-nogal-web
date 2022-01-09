<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="my-4">
      <h1
        class="mb-2 text-5xl font-bold leading-tight text-center font-kalam md:text-6xl"
      >
        RAQUEL NOGAL
      </h1>

      <Menu />
      <About />
      <Contact />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    };
  },
};
</script>
