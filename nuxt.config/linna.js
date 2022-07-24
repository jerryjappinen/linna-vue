// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default (options) => {
  const components = !!options.components || (options.components === false ? false : true)
  const composables = !!options.composables || (options.composables === false ? false : true)
  const icons = !!options.icons || (options.icons === false ? false : true)

  // Include library components in the compilation
  const transpile = []

  // Auto load linna (will auto-import components)
  const modules = []

  if (icons) {
    transpile.push('linna-icons')
    modules.push('linna-icons/nuxt')
  }

  if (composables || components) {
    modules.push('linna-vue/nuxt', {
      components,
      composables,
      prefix: options.prefix
    })

    if (composables) {
      transpile.push('linna-vue/composables')
    }

    if (components) {
      transpile.push('linna-vue/components')
    }

  }

  return {
    build: {
      transpile
    },
    modules
  }
}
