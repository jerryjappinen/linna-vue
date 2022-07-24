// Define extra routes to generate
// https://v3.nuxtjs.org/guide/deploy/static-hosting#client-side-only-rendering
// https://nitro.unjs.io/config/#prerender

// https://sitemap.nuxtjs.org/usage/sitemap
// {
//   url: '/page/3',
//   changefreq: 'daily',
//   priority: 1,
//   lastmod: '2017-06-30T13:30:00.000Z'
// }
export default ({
  baseUrl,
  exclude,
  routes
}) => {
  return {
    modules: [
      ['@nuxtjs/sitemap', {
        hostname: baseUrl,
        exclude,
        routes
      }]
    ],

    nitro: {
      prerender: {
        routes
      }
    }
  }
}
