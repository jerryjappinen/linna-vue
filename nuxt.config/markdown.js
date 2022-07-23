import mdPlugin from 'vite-plugin-markdown'

// Import markdown files
export default (options) => {
  return {
    vite: {
      plugins: [
        mdPlugin({
          mode: 'vue',
          markdownIt: {
            html: true,
            linkify: true,
            typographer: false,

            // Override defaults
            ...(options || {})
          }
        })
      ]
    }
  }
}
