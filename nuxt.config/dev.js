import isDev from 'linna-util/isDev'

export default (config) => {
  if (isDev()) {
    return config
  }
  return {}
}
