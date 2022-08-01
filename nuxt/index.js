import { defineNuxtModule, addComponentsDir, addAutoImportDir } from '@nuxt/kit'
import { fileURLToPath } from 'node:url'

// This file allows auto importing linna-vue components and composables in a Nuxt app
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

    if (components) {
      const componentsDir = fileURLToPath(new URL('./components', import.meta.url))

      console.log('componentsDir', componentsDir)

      await addComponentsDir({
        path: componentsDir,
        extensions: ['vue'],
        prefix: prefix || ''
      })
    }

    // FIXME: no prefixing for composables
    if (composables) {
      addAutoImportDir(fileURLToPath(new URL('./composables', import.meta.url)))

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
