module.exports = function(eleventyConfig) {
  // Layout aliases
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk')

  // Passthrough copy
  eleventyConfig.addPassthroughCopy('src/css')

  return {
    dir: {
      input: 'src'
    },
    passthroughFileCopy: true
  }
}
