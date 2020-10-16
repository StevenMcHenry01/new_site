module.exports = {
  plugins: [{
    resolve: "gatsby-plugin-chakra-ui",
    options: {
      isResettingCSS: false,
      isUsingColorMode: false
    },
  }, {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /\.svg$/
      }
    }
  }],
};