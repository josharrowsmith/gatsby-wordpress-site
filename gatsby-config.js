module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'yoursitesname',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
      },
    },
  ],
}
