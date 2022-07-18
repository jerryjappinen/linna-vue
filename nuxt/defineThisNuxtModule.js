import { defineNuxtModule } from '@nuxt/kit'
import { fileURLToPath } from 'node:url'

// This file allows using linna-vue as a Nuxt module
// Usage: add this to nuxt.config:
//   modules: [
//     'linna-vue/nuxt'
//   ]

// https://github.com/nuxt/framework/blob/main/packages/schema/src/types/hooks.ts
export default (prefix) => {
  return defineNuxtModule({
    hooks: {

      // Auto load composables
      'composables:dirs' (dirs) {
        dirs.push({
          path: fileURLToPath(new URL('../composables', import.meta.url)),
          prefix: prefix || ''
        })
      },

      // Auto load components
      'components:dirs' (dirs) {
        dirs.push({
          path: fileURLToPath(new URL('../components', import.meta.url)),
          prefix: prefix || ''
        })
      }

    }
  })
}

