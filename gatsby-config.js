module.exports = {
  pathPrefix: `/consulting`,
  siteMetadata: {
    title: `AxisCode`,
    description: `Consulting for cloud architecture, migration, apps, DB's, and scaling.`,
    author: `@mystagogue`,
    url: `https://axiscode.com`,
    image: `/images/axiscode_meta.png`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `axiscode-consulting`,
        short_name: `axiscode`,
        start_url: `/`,
        background_color: `#3423A6`,
        theme_color: `#69995D`,
        display: `minimal-ui`,
        icon: `src/images/axiscode_favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Merriweather:400,300,300italic,400italic,700,700italic', 'Merriweather+Sans:400,700']
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
