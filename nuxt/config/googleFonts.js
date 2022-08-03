import flattenDeep from 'lodash-es/flattenDeep'

// https://developers.google.com/fonts/docs/css2
// googleFonts(['Dosis', 200, 300, 800], 'Mouse+Memoirs')
// Would this be better? googleFonts({
//   Dosis: true,
//   Poppins: false,
//   'Mouse Memoirs': [200, 300, 800]
// })
export default (...args) => {
  const linkTags = []

  // Each arg will be an array now
  const families = args.map((arg) => {
    return [flattenDeep(arg)]
  })

  const hrefs = families.map((family, ...weights) => {
    let href = '' + family

    // Construct proper URL format
    if (weights && weights.length) {
      href += ':wght@' + weights.join(';')
    }

    return href
  })

  // Looks like this:
  // <link rel="preconnect" href="https://fonts.googleapis.com">
  // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  // <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;800&family=Mouse+Memoirs&display=swap" rel="stylesheet">
  if (hrefs && hrefs.length) {
    linkTags.push({
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    })
    linkTags.push({
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: true
    })

    // Construct final URLs
    const urlParams = hrefs.map((href) => {
      return 'family=' + href
    })
    linkTags.push({
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?' + urlParams.join('&') + '&display=swap'
    })
  }

  return {
    link: linkTags
  }
}
