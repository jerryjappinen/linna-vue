import { defineNuxtModule } from '@nuxt/kit'
import { fileURLToPath } from 'node:url'

export default (prefix) => {
  const runtimeDir = fileURLToPath(new URL('../', import.meta.url))
  const componentsDir = runtimeDir + 'components'
  const composablesDir = runtimeDir + 'composables'

  return defineNuxtModule({

    hooks: {

      // Auto load components
      // https://github.com/nuxt/framework/blob/main/packages/schema/src/types/hooks.ts
      'components:dirs' (dirs) {
        dirs.push({
          path: componentsDir,
          extensions: ['vue'],
          prefix: prefix || ''
        })
      },

      // FIXME: could this be done in `autoImports:extend`?
      // https://github.com/nuxt-community/sanity-module/blob/main/src/module.ts#L120-L126
      'autoImports:dirs' (dirs) {
        dirs.push(composablesDir)
      }

    }

  })
}

