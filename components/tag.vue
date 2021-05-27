<template>
  <nuxt-link
    :to="`/tags/${name}`"
    class="py-1 px-2 bg-orange-300 text-xs rounded-lg text-orange-900 transition-colors hover:bg-orange-500 hover:text-orange-100 whitespace-nowrap"
  >
    {{ name }}
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: String
  }
})
</script>