module.exports = {
  pathPrefix: `/consulting`,
  siteMetadata: {
    title: `AxisCode`,
    description: `Consulting for cloud architecture, migration, apps, DB's, and scaling.`,
    author: `@mystagogue`,
    url: `https://axiscode.com`,
    image: `/images/axiscode_meta.png`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      //FULL REFERENCE FOR ALL THESE FIELDS
      //https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#create
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-22782624-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this Germany-legality parameter is optional
        anonymize: false,
        // Setting this "do not track" parameter is also optional
        respectDNT: false,

        // Avoids sending pageview hits from custom paths
        //exclude: ["/preview/**", "/do-not-track/me/too/"],

        // Delays sending pageview hits on route update (in milliseconds)
        //pageTransitionDelay: 0,

        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",

        // Any additional optional fields
        //This means "only track X% of all users visiting the site."
        //sampleRate: 5,
        siteSpeedSampleRate: 25,
      },
    },

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
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Merriweather:400,300,300italic,400italic,700,700italic",
            "Merriweather+Sans:400,700",
          ],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
