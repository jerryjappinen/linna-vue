// Behavioral base meta tags
// FIXME: add adjustable viewport settings
export default () => {
  return {
    meta: {
      meta: [
        { charset: 'utf-8' },

        // Mobile
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'apple-mobile-web-app-status-bar-style',
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'default',
        },
        {
          hid: 'apple-mobile-web-app-status-bar-style',
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'default',
        },
        {
          hid: 'apple-mobile-web-app-capable',
          name: 'apple-mobile-web-app-capable',
          content: 'yes',
        },

        // Meta data
        { hid: 'og:type', property: 'og:type', content: 'website' },
      ]
    }
  }
}
