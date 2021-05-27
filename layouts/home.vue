<template>
  <Main>
    <header
      class="container flex justify-center items-center text-center px-4 py-24 text-3xl font-bold tracking-widest uppercase"
      style="word-spacing: 0.3em"
    >
      Blog Page
    </header>

    <nuxt />

    <Footer />
  </Main>
</template>

<script lang="ts">
import Vue from 'vue'
import Main from '~/components/main.vue'
import Footer from '~/components/footer.vue'

export default Vue.extend({
  components: { Main, Footer }
})
</script>
