import svgLoader from "vite-svg-loader";

import svgoConfig from "./svgoConfig";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default {
  vite: {
    plugins: [
      svgLoader({
        svgoConfig,
      }),
    ],
  },

  buildModules: [
    // State management
    // "@pinia/nuxt",
  ],

  modules: [],
};
