module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-offline",
    "gatsby-transformer-remark",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Josh Arrowsmith Blog`,
        description: 'A Gatsby website',
        short_name: 'Josh',
        background_color: 'black',
        theme_color: 'black',
        display: 'minimal-ui'
      }
    }, 
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: '46.101.222.219',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: false,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-typography',
    //   options: {
    //     omitGoogleFont: true,
    //     pathToConfigModule: 'src/utils/typography'
    //   }
    // },
  ],
}
