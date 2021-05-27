<template>
  <section class="container flex flex-col gap-16 py-4">
    <div class="flex flex-col gap-2">
      <h3 class="font-bold text-4xl capitalize">
        {{ tag.name }}
      </h3>

      <p class="">
        {{ tag.description }}
      </p>
    </div>

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
  async asyncData({ $content, params, redirect }: Context) {
    const tag = await $content('tags', params.tag)
      .only(['name', 'description', 'slug'])
      .fetch()

    if (Array.isArray(tag)) return redirect('404')

    const articles = (
      await $content('articles')
        .where({ tags: { $contains: tag.slug } })
        .only([
          'slug',
          'date',
          'readtime',
          'title',
          'description',
          'tags',
          'cover',
          'alt'
        ])
        .sortBy('update', 'desc')
        .fetch()
    ).map((i: { tags: [{ name: string }] }) => ({
      ...i,
      tags: i.tags.filter(j => j != tag.name).slice(0, 4)
    }))

    return { articles, tag }
  },

  components: { Article },
  layout: 'page'
}
</script>
