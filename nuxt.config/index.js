import { mergeWithArrays } from 'linna-util'

export { default as assets } from './assets'
export { default as linna } from './linna'
export { default as markdown } from './markdown'
export { default as meta } from './meta'
export { default as pinia } from './pinia'
export { default as scripts } from './scripts'
export { default as scss } from './scss'
export { default as sitemap } from './sitemap'
export { default as svg } from './svg'
export { default as viewport } from './viewport'

// Use this to merge configs, including nested arrays
export const merge = (...configs) => {
  return mergeWithArrays(...configs)
}
