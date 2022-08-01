import isPlainObject from 'lodash-es/isPlainObject'
// import { fileURLToPath } from 'node:url'

// Link to local source files when running docs
const envVarNames = {
  'linna-icons': 'ALIAS_LINNA_ICONS',
  'linna-sass': 'ALIAS_LINNA_SASS',
  'linna-svg': 'ALIAS_LINNA_SVG',
  'linna-util': 'ALIAS_LINNA_UTIL',
  'linna-vue': 'ALIAS_LINNA_VUE'
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default (pathsInput) => {
  const paths = isPlainObject(pathsInput) ? pathsInput : {}
  const aliases = {}

  // Resolve path entered by user in their nuxt config correctly
  // This module is running from node_modules/linna-vue/nuxt.config/linnaDev
  const joinPaths = (...paths) => {
    return paths.join('/')
  }

  // Add an alias for each path that was set
  for (const packageName in envVarNames) {
    const packagePath = paths[packageName] || process.env[envVarNames[packageName]]
    if (packagePath) {
      aliases[packageName] = packagePath
    }
  }

  // linna-sass's source code is nested
  if (aliases['linna-sass']) {
    aliases['linna-sass'] = joinPaths(aliases['linna-sass'], 'src')
  }

  // linna-util's source is nested
  if (aliases['linna-util']) {
    aliases['linna-util'] = joinPaths(aliases['linna-util'], 'src')

    // Local utilities must be transpiled
    // devConfig.build = {
    //   transpile: [
    //     'linna-util'
    //   ]
    // }

  }

  return aliases
}
