import { defineNuxtModule, addAutoImportDir } from '@nuxt/kit'
import { fileURLToPath } from 'node:url'
import { camelCase } from 'lodash'

// const composableNames = [
//   'cursor',
//   'gamepad',
//   'isMounted',
//   'network',
//   'time',
//   'viewport'
// ]

// const generateComposableName = (prefix, name) => {
//   return camelCase((prefix ? prefix + '-' : '') + 'use-' + name)
// }

export default (prefix) => {
  const runtimeDir = fileURLToPath(new URL('../', import.meta.url))
  const componentsDir = runtimeDir + 'components'
  const composablesDir = runtimeDir + 'composables'

  return defineNuxtModule({

    // Auto load components
    // https://github.com/nuxt/framework/blob/main/packages/schema/src/types/hooks.ts
    hooks: {
      'components:dirs' (dirs) {
        dirs.push({
          path: componentsDir,
          extensions: ['vue'],
          prefix: prefix || ''
        })
      }
    },

    // FIXME: could this be done in `autoImports:extend`?
    // https://github.com/nuxt-community/sanity-module/blob/main/src/module.ts#L120-L126
    async setup () {

      // addAutoImport(composableNames.map((composableName) => {
      //   generateComposableName(prefix, composableName)
      //   return {
      //     name: composableName,
      //     as: generateComposableName(prefix, composableName),
      //     from: composablesDir
      //   }
      // }))

      addAutoImportDir(composablesDir)

    }

  })
}

