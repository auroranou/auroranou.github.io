module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("css/*.css");

  eleventyConfig.ignores.add("README.md");
};
