// Compression
// https://github.com/exreplay/nuxt-compression
export default (options) => {
  return {
    buildModules: ['@averjs/nuxt-compression'],
    compression: {
      // maxAge: ...,
      // cacheControl: ...,

      // https://github.com/vbenjs/vite-plugin-compression#options
      viteCompression: {
        ...(options || {})
      }
    }]
  }
}
