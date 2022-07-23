// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default () => {
  return {

    // Include library components in the compilation
    build: {
      transpile: [
        'linna-icons',
        'linna-vue/composables',
        'linna-vue/components'
      ]
    },

    // Auto load linna (will auto-import components)
    modules: [
      'linna-icons/nuxt',
      'linna-vue/nuxt'
    ]
  }
}
