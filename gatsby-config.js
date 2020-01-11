module.exports = {
  siteMetadata: {
    title: `Jolien's grote speurtocht`,
    description: `Een super leuke verjaardag speurtocht!`,
    author: `Eelco Bosklopper`,
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jolien's Speurtocht`,
        short_name: `Jolien's speurtocht`,
        start_url: `/`,
        background_color: `#911191`,
        theme_color: `#911191`,
        display: `standalone`,
        icon: `src/images/magic-book.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
