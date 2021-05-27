<template>
  <article class="flex justify-start items-start gap-4">
    <div class="flex flex-col items-start justify-start w-full gap-2">
      <nuxt-link :to="`/${slug}`" class="">
        <small class="text-xs font-light"> {{ date }} | {{ readtime }} </small>

        <h3 class="font-bold text-xl">
          {{ title }}
        </h3>

        <p>
          {{ description }}
        </p>
      </nuxt-link>

      <div class="flex gap-2 flex-wrap">
        <Tag v-for="tag in tags" :key="tag" :name="tag" />
      </div>
    </div>

    <nuxt-link :to="`/${slug}`" class="flex-shrink-0 p-2 w-[240px] h-[162px]">
      <nuxt-img
        provider="static"
        :src="`/images/${cover}`"
        loading="lazy"
        width="240"
        height="162"
        quality="80"
        class="rounded-lg ring-8 ring-orange-300 overflow-hidden"
      />
    </nuxt-link>
  </article>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import Tag from '~/components/tag.vue'

export default Vue.extend({
  props: {
    article: Object as PropOptions<{
      date: string
      readtime: string
      title: string
      description: string
      tags: string[]
      slug: string
      cover: string
      alt: string
    }>
  },

  data() {
    return {
      date: this.article.date,
      readtime: this.article.readtime,
      title: this.article.title,
      description: this.article.description,
      tags: this.article.tags,
      slug: this.article.slug,
      cover: this.article.cover,
      alt: this.article.alt
    }
  },

  components: { Tag }
})
</script>