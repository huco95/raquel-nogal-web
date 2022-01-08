<template>
  <div>
      <div class="px-4">
          <a :href="publication.link" target="_blank">
              <div class="flex flex-wrap items-center p-2 my-8 -mx-4 rounded-md shadow-md bg-zinc-200 hover:shadow-card">
                  <div class="w-full px-4 my-2 text-2xl font-bold text-center md:w-2/6">
                      {{ publication.title }}
                  </div>
                  <div class="w-full px-4 md:w-4/6">
                      <div class="mb-1">
                          <span class="text-lg font-bold">{{ publication.publisher }}</span> || {{ publication.date }}
                      </div>
                      <p class="leading-relaxed text-justify">
                        {{ publication.description }}
                      </p>
                  </div>
              </div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PublicationCard',
  props: {
    publication: {
      type: Object,
      required: true
    }
  },
};
</script>