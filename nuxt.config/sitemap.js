// Define extra routes to generate
// https://v3.nuxtjs.org/guide/deploy/static-hosting#client-side-only-rendering
// https://nitro.unjs.io/config/#prerender
export default (routesToPrerender) => {
  return {
    nitro: {
      prerender: {
        routes: routesToPrerender
      }
    }
  }
}
