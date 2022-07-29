import { resolve } from 'path'

import isDev from 'linna-util/isDev'

// Link to local source files when running docs
const envVarNames = {
  'linna-sass': 'ALIAS_LINNA_SASS',
  'linna-svg': 'ALIAS_LINNA_SVG',
  'linna-util': 'ALIAS_LINNA_UTIL',
  'linna-vue': 'ALIAS_LINNA_VUE'
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default (paths) => {
  if (isDev()) {
    const devConfig = {
      alias: {}
    }

    for (const packageName in envVarNames) {
      if (paths[packageName] || process.env[envVarNames[packageName]]) {
        devConfig.alias[packageName] = resolve(__dirname, paths[packageName] || process.env[envVarNames[packageName]])
      }
    }

    // linna-sass's source code is nested
    if (devConfig.alias['linna-sass']) {
      devConfig.alias['linna-sass'] = resolve(devConfig.alias['linna-sass'], 'src')
    }

    // linna-util's source is nested
    if (devConfig.alias['linna-util']) {
      devConfig.alias['linna-util'] = resolve(devConfig.alias['linna-util'], 'src')

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
