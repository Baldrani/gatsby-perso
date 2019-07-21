/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Title`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gists`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/articles`,
      },
    },
    {
      resolve: "gatsby-remark-embed-gist",
      options: {
        // Optional:

        // the github handler whose gists are to be accessed
        username: 'Baldrani',

        // a flag indicating whether the github default gist css should be included or not
        // default: true
        includeDefaultCss: true
      }
    }
  ]
  /* Your site config here */
}
