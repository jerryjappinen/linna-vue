// SCSS preprocessing setup
// e.g. scss({ global: 'styles/index.scss', shared: 'styles/mixins.scss', external: 'https://...css' })
export default ({
  global,
  shared,
  external
}) => {

  // This goes into Nuxt, which needs list of file paths
  let globalFiles = []
  if (global) {
    globalFiles = (Array.isArray(global) ? global : [global]).map((path) => {
      return '@/' + path
    })
  }

  // This goes into vite, which needs SCSS code as string
  let sharedFiles = []
  if (shared) {
    sharedFiles = (Array.isArray(shared) ? shared : [shared]).map((path) => {
      return `@import '@/${path};'`
    })
  }

  // Links to static CSS files
  let externalLinkTags = []
  if (external) {
    externalLinkTags = (Array.isArray(external) ? external : [external]).map((path) => {
      return { rel: 'stylesheet', href: 'https://style.lib.com/styles.css' }
    })
  }

  return {
    css: globalFiles,
    link: externalLinkTags,

    // Global style tags (currently not supported)
    // meta: {
    //   style: [
    //     {
    //       type: 'text/css',
    //       children: ':root { color: red }'
    //     }
    //   ]
    // },

    // Inject shared SCSS into components
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: sharedFiles.join('\n')
          }
        }
      }
    }

  }
}
