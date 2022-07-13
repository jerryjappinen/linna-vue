# linna-vue

Install dependencies:

```sh
npm i linna-sass linna-util linna-vue
```

Some components might depend on modules from other packages:

```js
npm i lodash date-fns markdown-it
```

Use components in your `.vue` files:

```js
import ClickButton from 'linna-vue/components/ClickButton.vue'

export default {
  components: {
    ClickButton
  }
}
```

`components/` is NOT built during install. You must transpile them yourself in your project.


### Nuxt module

Install as a Nuxt module to auto-import components.

```js
export default {
  modules: ['linna-vue']
}
```
