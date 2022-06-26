import isArray from "lodash/isArray";
import mergeWith from "lodash/mergeWith";

import assets from "./assets";
import meta from "./meta";
import modules from "./modules";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
const configs = [
  assets,
  meta,
  modules,
  {
    // These are only to make early development easier
    // https://v3.nuxtjs.org/getting-started/introduction
    // ssr: false,
    // typescript: {
    //   shim: false
    // }
  },
];

// Also merge arrays
// https://lodash.com/docs/4.17.15#mergeWith
export default mergeWith({}, ...configs, (objValue, srcValue) => {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }
});
