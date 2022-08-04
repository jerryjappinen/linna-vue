import isDev from 'linna-util/isDev'

import getDevAliases from './getDevAliases'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default (options) => {
  const opts = options || {}

  const components = !!opts.components || (opts.components === false ? false : true)
  const composables = !!opts.composables || (opts.composables === false ? false : true)
  const icons = !!opts.icons || (opts.icons === false ? false : true)

  // Include library components in the compilation
  const transpile = [
    'linna-util',
    'linna-vue'
  ]

  // Auto load linna (will auto-import components)
  const modules = []

  if (icons) {
    transpile.push('linna-icons')
    modules.push('linna-icons/nuxt')
  }

  if (composables || components) {
    modules.push(['linna-vue/nuxt', {
      components,
      composables,
      prefix: opts.prefix
    }])
  }

  // Only in dev mode when asked
  const alias = opts.dev && isDev()
    ? getDevAliases(opts.dev)
    : {}

  return {
    alias,
    build: {
      transpile
    },
    modules
  }
}
