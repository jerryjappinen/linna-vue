import { fileURLToPath } from 'node:url'

// https://github.com/nuxt/framework/issues/6205
// import { isDev } from 'linna-util'
const isDev = () => {
  return process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
}

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
  if (isDev()) {
    const paths = pathsInput || {}
    const devConfig = {
      alias: {}
    }

    // Resolve path entered by user in their nuxt config correctly
    // This module is running from node_modules/linna-vue/nuxt.config/linnaDev
    const joinPaths = (...paths) => {
      return paths.join('/')
    }

    // Add an alias for each path that was set
    for (const packageName in envVarNames) {
      const packagePath = paths[packageName] || process.env[envVarNames[packageName]]
      if (packagePath) {
        devConfig.alias[packageName] = packagePath
      }
    }

    // linna-sass's source code is nested
    if (devConfig.alias['linna-sass']) {
      devConfig.alias['linna-sass'] = joinPaths(devConfig.alias['linna-sass'], 'src')
    }

    // linna-util's source is nested
    if (devConfig.alias['linna-util']) {
      devConfig.alias['linna-util'] = joinPaths(devConfig.alias['linna-util'], 'src')

      // Local utilities must be transpiled
      // devConfig.build = {
      //   transpile: [
      //     'linna-util'
      //   ]
      // }

    }

    return devConfig
  }

  return {}
}
