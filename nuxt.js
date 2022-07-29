import { defineNuxtModule, addComponentsDir, addAutoImportDir } from '@nuxt/kit'
import { fileURLToPath } from 'node:url'

// This file allows auto importing linna-icons in a Nuxt app
// Add this to nuxt.config:
//   modules: [
//     'linna-vue/nuxt'
//   ]
export default defineNuxtModule({
  meta: {
    name: 'linna-vue',
    configKey: 'linnaVue',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },

  defaults: {
    components: true,
    composables: true,
    prefix: 'true'
  },

  async setup ({ components, composables, prefix }) {
    const componentsDir = fileURLToPath(new URL('./components', import.meta.url))
    const composablesDir = fileURLToPath(new URL('./composables', import.meta.url))

    if (components) {
      await addComponentsDir({
        path: componentsDir,
        extensions: ['vue'],
        prefix: prefix || ''
      })
    }

    // FIXME: no prefixing for composables
    if (composables) {
      addAutoImportDir(composablesDir)

      // Prefixing can be done here, but no way to make default imports work?
      // addAutoImport(composableNames.map((composableName) => {
      //   generateComposableName(composableName, prefix)
      //   return {
      //     // name: generateComposableName(composableName),
      //     name: 'default',
      //     as: generateComposableName(composableName, prefix),
      //     from: composablesDir
      //   }
      // }))
    }

  }

})
