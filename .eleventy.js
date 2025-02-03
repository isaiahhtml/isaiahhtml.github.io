const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(pluginRss, {
    type: "atom",
    collection: {
      name: "posts",
      limit: 10
    }
  });

  eleventyConfig.addFilter("formatDate", dateObj => {
    const date = new Date(dateObj);

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    return new Intl.DateTimeFormat('en-PH', options).format(date);
  })
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
