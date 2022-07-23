import { flatten } from 'lodash-es'

// Global script tags
export default (srcs) => {
  const scriptTags = flatten(srcs || []).map((src) => {
    return { src }
  })

  return {
    meta: {
      script: scriptTags
    }
  }
}
