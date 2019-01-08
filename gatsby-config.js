module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
<<<<<<< HEAD
        baseUrl: '46.101.222.219',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true
=======
        baseUrl: '',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955
      },
    },
  ],
}
