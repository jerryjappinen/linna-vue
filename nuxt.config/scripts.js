import { flatten, isString } from 'lodash-es'

// Global script tags
// Each src should be either a string or an object with src attribute, and possibly others
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
export default (...srcs) => {
  const scriptTags = flatten(srcs).map((value) => {
    return isString(value)
      ? { async: true, src: value }
      : { async: true, ...value }
  })

  return {
    meta: {
      script: scriptTags
    }
  }
}
