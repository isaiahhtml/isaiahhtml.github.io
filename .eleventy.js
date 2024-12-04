const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addFilter('shortDate', (dateObj) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return dateObj.toLocaleDateString(undefined, options);
  });

  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget("./src/css");

  return {
    dir:
      {
        input: "src",
        output: "_site"
      }
  }
}
