<template>
  <Main>
    <nuxt />
  </Main>
</template>

<script lang="ts">
import Vue from 'vue'
import Main from '~/components/main.vue'

export default Vue.extend({
  components: { Main }
})
</script>
