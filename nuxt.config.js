export default {
  target: 'static',

  loading: {
    color: '#fdba74',
    height: '8px'
  },

  build: {
    babel: {
      presets({}, [preset, options]) {
        options.loose = true
      }
    }
  },

  head: {
    title: 'Blog Page',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis dui ut ligula aliquet consectetur. Morbi volutpat.`
      }
    ],

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: ['~/assets/styles/font.css', '~/assets/styles/main.css'],

  sitemap: {
    hostname: 'https://blog-page.netlify.app',

    routes: async () => {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true })
        .only(['path'])
        .fetch()

      return files.map(file =>
        file.path === '/index' ? '/' : file.path.replace('articles/', '')
      )
    }
  },

  modules: ['@nuxt/content', '@nuxtjs/sitemap'],

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss', '@nuxt/image'],

  content: {
    liveEdit: false,

    markdown: { prism: { theme: '~/assets/styles/prism.css' } }
  },

  hooks: {
    'content:file:beforeInsert': document => {
      if (document.extension == '.md' && document.path.includes('articles')) {
        document.date = new Date(document.update).toLocaleDateString('en', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })

        const content = document.text.match(/\w+/g) || ''

        document.readtime = ~~(content.length / 200) + ' min read'
      }
    }
  },

  tailwindcss: { viewer: false }
}
