// import {
//   siteAuthor,
//   siteTitle,
//   longSiteTitle,
//   siteDescription,
//   siteMainColor,
// } from "../config";

export default {
  // https://v3.nuxtjs.org/docs/directory-structure/nuxt.config#meta
  meta: {
    // title: longSiteTitle,

    // Default meta tags
    meta: [
      { charset: "utf-8" },

      // Mobile
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "apple-mobile-web-app-status-bar-style",
        name: "apple-mobile-web-app-status-bar-style",
        content: "default",
      },
      {
        hid: "apple-mobile-web-app-status-bar-style",
        name: "apple-mobile-web-app-status-bar-style",
        content: "default",
      },
      {
        hid: "apple-mobile-web-app-capable",
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },

      // Content
      //   { hid: "author", name: "author", content: siteAuthor },
      //   { hid: "description", name: "description", content: siteDescription },
      //   { hid: "theme-color", name: "theme-color", content: siteMainColor },

      // Description

      // Twitter
      // { hid: 'twitter:site', name: 'twitter:site', content: '@' + twitterUsername },
      //   { hid: "twitter:title", name: "twitter:title", content: longSiteTitle },
      //   {
      //     hid: "twitter:description",
      //     name: "twitter:description",
      //     content: siteDescription,
      //   },

      // OpenGraph, Facebook
      // { hid: 'fb:app_id', property: 'fb:app_id', content: facebookAppId },
      //   { hid: "og:site_name", property: "og:site_name", content: siteTitle },
      //   { hid: "og:title", property: "og:title", content: longSiteTitle },
      //   {
      //     hid: "og:description",
      //     property: "og:description",
      //     content: siteDescription,
      //   },
      { hid: "og:type", property: "og:type", content: "website" },
    ],
  },
};
