module.exports = function(eleventyConfig) {
  // Layout aliases
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk')

  // Copy images directory to output
  eleventyConfig.addPassthroughCopy('src/img')

  return {
    dir: {
      input: 'src'
    },
    passthroughFileCopy: true
  }
}
