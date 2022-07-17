# linna-vue

Install dependencies:

```sh
npm i lodash date-fns linna-sass linna-util linna-vue
```

Some components might depend on modules from other packages:

```js
npm i markdown-it vue-slider-component
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

`components/` are NOT built during install. You must transpile them yourself in your project.


### Nuxt module

Install as a Nuxt module to auto-import components.

```js
export default {
  modules: ['linna-vue']
}
```

### Todo

- [] Add tests
- [] Make test watcher the dev command
- [] Set test command as default in codesandbox
- [] Add `persist` composable
- [] Add `nuxtPage` composable
