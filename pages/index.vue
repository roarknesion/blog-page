<template>
  <section class="container flex flex-col gap-16 py-4">
    <Article
      v-for="article in articles"
      :key="article.title"
      :article="article"
    />
  </section>
</template>

<script lang="ts">
import type { Context } from '@nuxt/types'
import Article from '~/components/article.vue'

export default {
  async asyncData({ $content }: Context) {
    const articles = (
      await $content('articles')
        .only([
          'slug',
          'date',
          'readtime',
          'title',
          'description',
          'tags',
          'cover',
          'alt',
          'update'
        ])
        .sortBy('update', 'desc')
        .fetch()
    ).map((i: { tags: [{ name: string }] }) => ({
      ...i,
      tags: i.tags.slice(0, 4)
    }))

    return { articles }
  },

  components: { Article },
  layout: 'home'
}
</script>
