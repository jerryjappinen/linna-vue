// https://github.com/nuxt/framework/issues/6205
// import isDev from 'linna-util/isDev'
const isDev = () => {
  return process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
}

export default (config) => {
  if (isDev()) {
    return config
  }
  return {}
}
