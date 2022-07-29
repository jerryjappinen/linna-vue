// export { mergeWithArrays as default } from 'linna-util'

// NOTE: module loading in nuxt.config is broken, so we have to do this here
// https://github.com/nuxt/framework/issues/6205
import isArray from 'lodash-es/isArray'
import mergeWith from 'lodash-es/mergeWith'

// Merge objects and arrays recursively
// https://lodash.com/docs/4.17.15#mergeWith
export const merge = (...objects) => {
  return mergeWith({}, ...objects, (objValue, srcValue) => {
    if (isArray(objValue)) {
      return objValue.concat(srcValue)
    }
  })
}
