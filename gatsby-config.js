module.exports = {
  siteMetadata: {
    title: "Koinonia Davis NSWN",
    author: "Koinonia Davis",
    description: "Come join us for Koinonia Davis New Student Welcome Night! You wont regret it. daviskoinonianswn",
    siteUrl: `http://www.daviskoinonianswn.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Koinonia Davis NSWN New Student Welcome Night',
        short_name: 'NSWN',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/koinlogo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
