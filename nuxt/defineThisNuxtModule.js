import { defineNuxtModule, addAutoImportDir, addComponentsDir } from '@nuxt/kit'
// import { camelCase } from 'lodash-es'
import { fileURLToPath } from 'node:url'

// const composableNames = [
//   'cursor',
//   'gamepad',
//   'isMounted',
//   'network',
//   'time',
//   'viewport'
// ]

// const generateComposableName = (name, prefix) => {
//   return camelCase('use-' + (prefix ? prefix + '-' : '') + name)
// }



export default (prefix) => {
  const runtimeDir = fileURLToPath(new URL('../', import.meta.url))
  const componentsDir = runtimeDir + 'components'
  const composablesDir = runtimeDir + 'composables'

  return defineNuxtModule({

    // hooks: {

    //   // NOTE: Does not support prefixing
    //   // https://github.com/nuxt-community/sanity-module/blob/main/src/module.ts#L120-L126
    //   // 'autoImports:dirs' (dirs) {
    //   //   dirs.push(composablesDir)
    //   // },

    //   // Auto load components
    //   // https://github.com/nuxt/framework/blob/main/packages/schema/src/types/hooks.ts
    //   'components:dirs' (dirs) {
    //     dirs.push({
    //       path: componentsDir,
    //       extensions: ['vue'],
    //       prefix: prefix || ''
    //     })
    //   }

    // },

    async setup () {

      await addComponentsDir({
        path: componentsDir,
        extensions: ['vue'],
        prefix: prefix || ''
      })

      // FIXME: no prefixing for composables
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

  })
}

