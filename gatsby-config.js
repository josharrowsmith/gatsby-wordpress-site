module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: '104.248.226.123',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
      },
    },
  ],
}
