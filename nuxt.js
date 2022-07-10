import { defineNuxtModule } from '@nuxt/kit'
import { fileURLToPath } from 'node:url'

// This file allows using linna-vue as a Nuxt module
export default defineNuxtModule({
  hooks: {
    'components:dirs' (dirs) {
      // Add ./components dir to the list
      dirs.push({
        path: fileURLToPath(new URL('./components', import.meta.url)),
        // prefix: 'linna'
        prefix: ''
      })
    }
  }
})

