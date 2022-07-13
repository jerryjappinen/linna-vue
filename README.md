# linna-vue

### Nuxt module

Install as a Nuxt module to auto-import components.

```js
defineNuxtConfig({
  modules: ['linna-vue']
})
```

# Development

To run docs with local source files, use [`npm link`](https://docs.npmjs.com/cli/v8/commands/npm-link)

```js
First, `npm link` in a package folder with no. It will also link any bins in the package to {prefix}/bin/{name}. Note that npm link uses the global prefix (see npm prefix -g for its value).

Next, in some other location, npm link package-name will create a symbolic link from globally-installed package-name to node_modules/ of the current folder.
```
