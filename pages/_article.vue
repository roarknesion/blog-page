<template>
  <section class="container flex flex-col gap-8">
    <div class="flex flex-col gap-2">
      <small class="text-xs font-light">
        {{ article.date }} · {{ article.readtime }}
      </small>

      <h3 class="font-bold text-4xl">
        {{ article.title }}
      </h3>

      <p class="">
        {{ article.description }}
      </p>

      <div class="flex gap-2 flex-wrap">
        <Tag v-for="tag in article.tags" :key="tag" :name="tag" />
      </div>
    </div>

    <a
      :href="article.source"
      class="inline-flex flex-shrink-0 w-full h-auto p-2"
      target="_blank"
    >
      <nuxt-img
        provider="static"
        :src="`/images/${article.cover}`"
        loading="lazy"
        width="768"
        height="432"
        quality="80"
        :alt="article.alt"
        class="rounded-lg ring-8 ring-orange-300 overflow-hidden"
      />
    </a>

    <nuxt-content
      :document="{ body: article.body }"
      class="prose prose-sm max-w-none"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import type { Context } from '@nuxt/types'
import type { IContentDocument } from '@nuxt/content/types/content'
import Tag from '~/components/tag.vue'

export default Vue.extend({
  async asyncData({ $content, params }: Context) {
    const article = await $content('articles', params.article)
      .only([
        'date',
        'readtime',
        'title',
        'description',
        'tags',
        'source',
        'cover',
        'alt',
        'body'
      ])
      .fetch()

    return { article }
  },

  data: () => ({
    article: {} as IContentDocument
  }),

  components: { Tag },

  layout: 'page'
})
</script>
