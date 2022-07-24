import { compact, flatten } from 'lodash-es'

import viteMarkdownPlugin from 'vite-plugin-markdown'

import md from 'markdown-it'

// Import markdown files
// https://www.npmjs.com/package/vite-plugin-markdown
export default (options) => {

  // https://github.com/markdown-it/markdown-it#init-with-presets-and-options
  const markdownItOptions = md({
    html: true,
    linkify: true,
    typographer: false,

    // Override defaults
    ...(options || {})
  })

  const markdownIt = md(markdownItOptions)

  // https://github.com/markdown-it/markdown-it#plugins-load
  if (options.plugins) {
    compact(flatten([options.plugins])).forEach((plugin) => {
      markdownIt.use(plugin)
    })
  }

  return {
    vite: {
      plugins: [
        viteMarkdownPlugin({
          mode: 'vue',
          markdownIt
        })
      ]
    }
  }
}
