module.exports = {
  siteMetadata: {
    title: "Koinonia Davis NSWN",
    author: "Koinonia Davis",
    description: "Come join us for Koinonia Davis New Student Welcome Night! You wont regret it.",
    siteUrl: `http://www.daviskoinonianswn.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
