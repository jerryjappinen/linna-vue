// import { longSiteTitle, splashImagePath } from "../config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default {
  // Global CSS (internal)
  css: ["@/styles/global.scss"],

  // https://v3.nuxtjs.org/docs/directory-structure/nuxt.config#meta
  meta: {
    // Global CSS (external)
    link: [
      //   // Icons
      //   { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      //   { rel: "alternate icon", href: "/favicon.ico" },
      //   {
      //     rel: "mask-icon",
      //     type: "image/svg+xml",
      //     href: "/mask-icon.svg",
      //     color: "#000000",
      //   },
      //   { rel: "apple-touch-icon", href: "apple-touch-icon.png" },
      //   // Manifest
      //   { rel: "manifest", href: "/manifest.json" },
    ],

    // Splash images
    meta: [
      //   // Twitter cards
      //   {
      //     hid: "twitter:card",
      //     name: "twitter:card",
      //     content: "summary_large_image",
      //   },
      //   { hid: "twitter:image", name: "twitter:image", content: splashImagePath },
      //   {
      //     hid: "twitter:image:alt",
      //     property: "twitter:image:alt",
      //     content: longSiteTitle,
      //   },
      //   // OpenGraph, Facebook
      //   { hid: "og:image", property: "og:image", content: splashImagePath },
      //   { hid: "og:image:alt", property: "og:image:alt", content: longSiteTitle },
    ],

    // Please note that this is an area that is likely to change
    style: [
      // { children: ':root { color: red }', type: 'text/css' }
    ],

    // Global script tags
    script: [
      // { src: 'https://awesome-lib.js' }
    ],
  },
};
