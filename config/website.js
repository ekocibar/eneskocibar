const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Enes Kocibar | Software Developer', // Navigation and Site Title
  siteTitleAlt: 'Enes Kocibar', // Alternative Site title for SEO
  siteTitleShort: 'Kocibar', // short_name for manifest
  siteHeadline: 'Enes Kocibar | Software Developer', // Headline for schema.org JSONLD
  siteUrl: 'https://ekocibar.nl', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Enes Kocibar | A portfolio of a software developer',
  author: 'Enes Kocibar', // Author for schema.org JSONLD

  userTwitter: '@ekoci12', // Twitter Username

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
