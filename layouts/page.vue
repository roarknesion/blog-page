<template>
  <Main>
    <header class="container py-16 flex justify-center items-center">
      <nuxt-link
        to="/"
        class="px-4 py-2 rounded-lg opacity-40 transition-opacity hover:opacity-80 -ml-4"
      >
        Home
      </nuxt-link>
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



