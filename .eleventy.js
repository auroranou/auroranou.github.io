module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css/*.css");
  eleventyConfig.addPassthroughCopy("assets.favicon.png");

  eleventyConfig.ignores.add("README.md");
};
