module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: '46.101.222.219',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true
      },
    },
  ],
}
