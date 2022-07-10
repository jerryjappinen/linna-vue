// Meta data
export const siteAuthor = 'Miscelle Team'
export const siteTitle = 'Miscelle'
export const siteTagline = 'Miscellaneous cr*p as a service'
export const siteDescription = 'Orchestrate integrations, manage data, API keys and collaborate with your team.'
export const siteMainColor = '#ffffff' // '#21324b'
export const siteAccentColor = '#0052cd'

export const longSiteTitle = `${siteTitle} – ${siteTagline}`



// Paths
export const baseUrl = process.env.BASE_URL || isDev
  ? 'http://localhost:3000'
  : 'https://linna.vercel.app'
export const splashImagePath = baseUrl + '/splashImage.jpg'
