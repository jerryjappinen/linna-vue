# linna-vue

See [components/](./components/)

Install dependencies:

```sh
npm i linna-vue linna-sass linna-util lodash-es date-fns
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



### Composables

See [composables/](./composables/)



### nuxt.config

See [nuxt.config/](./nuxt.config/)



#### Nuxt module

Install as a Nuxt module to auto-import components and composables:

```js
export default {
  modules: [
    'linna-vue/nuxt'
  ]
}
```

Or use the `nuxt.config` helper `linna`, which does the same thing.

### Todo

- [ ] Add tests
- [ ] Make test watcher the dev command
- [ ] Set test command as default in codesandbox
- [ ] `Icon` component
- [ ] `modelValue` composable
- [ ] Add `persist` composable
- [ ] Add `nuxtPage` composable
- [ ] Make textfield support custom content and not just icons
