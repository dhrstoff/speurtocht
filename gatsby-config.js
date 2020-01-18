module.exports = {
  siteMetadata: {
    title: `Jolien's grote speurtocht`,
    description: `Een super leuke verjaardag speurtocht!`,
    author: `Eelco Bosklopper`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jolien's grote Speurtocht`,
        short_name: `Jolien's grote speurtocht`,
        start_url: `/`,
        background_color: `#911191`,
        theme_color: `#911191`,
        display: `standalone`,
        icon: `src/images/magic-book.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
