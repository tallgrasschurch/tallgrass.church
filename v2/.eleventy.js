module.exports = function(eleventyConfig) {
  // Layout aliases
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk')

  return {
    dir: {
      input: 'src'
    }
  }
}
