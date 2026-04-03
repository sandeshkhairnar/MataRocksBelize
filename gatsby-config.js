require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Mata Rocks Resort`,
    description: `Mata Rocks is a boutique beachfront resort located on Ambergris Caye in San Pedro, Belize. The resort is situated south of the main town, approximately a 15 minute golf cart ride from the airport.`,
    author: `Jose Urbina`,
    siteUrl: `https://matarock.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
        sassOptions: {
          api: 'modern',
          silenceDeprecations: ["legacy-js-api"],
        },
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GTAG_TRACKING_ID],
        pluginConfig: {
          head: true
        },
      },
    },
    {
      resolve: 'gatsby-v5-source-hygraph',
      options: {
        endpoint: process.env.HYGRAPH_ENDPOINT,
        token: process.env.HYGRAPH_TOKEN,
        typePrefix: "GraphCms",
        queryConcurrency: 2,
        fragmentsPath: "graphcms-fragments",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
