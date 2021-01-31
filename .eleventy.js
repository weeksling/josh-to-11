const moment = require('moment');
const pluginRss = require("@11ty/eleventy-plugin-rss");

moment.locale('en');

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {

  /*
   * Configuration
   */

  eleventyConfig.addPassthroughCopy({ 'images': '_images' });
  eleventyConfig.addPassthroughCopy({ 'css': '_css' });
  eleventyConfig.addPassthroughCopy({ 'html': '_html' });

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
  eleventyConfig.addLayoutAlias('anna', 'layouts/anna.njk');

  eleventyConfig.setUseGitIgnore(false);

  /*
   * Collections
   */

  eleventyConfig.addCollection('rssCollection', function (collection) {
    const tmpCollection = collection.getAllSorted();
    return tmpCollection.reverse().filter(function (tpl) {
      if (isPublishedPost(tpl.data) && !tpl.data.link_to) {
        return true;
      }
    });
  });

  eleventyConfig.addCollection('postsCollection', function (collection) {
    const tmpCollection = collection.getAllSorted();
    return tmpCollection.reverse().filter(function (tpl) {
      if (isPublishedPost(tpl.data)) {
        return true;
      }
    });
  });

  eleventyConfig.addCollection('bestOfCollection', function (collection) {
    const tmpCollection = collection.getAllSorted();
    return tmpCollection.reverse().filter(function (tpl) {
      if (isPublishedPost(tpl.data) && tpl.data.tags && tpl.data.tags.includes('Best Of')) {
        return true;
      }
    });
  });

  eleventyConfig.addCollection('allTags', function (collection) {
    let allTags = [];

    collection.getAllSorted().forEach(function (el) {
      allTags = allTags.concat(el.data.tags);
    });

    let tagDict = {};
    allTags.sort().forEach(function (el) {
      if (el) {
        tagDict[el] = tagDict[el] ? tagDict[el] + 1 : 1;
      }
    });

    return tagDict;
  });

  /*
   * Filters
   */

  eleventyConfig.addFilter('dateformat', function (dateIn) {
    return moment(dateIn).format('MMM DD, YYYY');
  });

  eleventyConfig.addFilter('json', function (data) {
    return JSON.stringify(data, null, 2);
  });

  /*
   * Shortcodes
   */

  eleventyConfig.addPairedShortcode('h2br', (text) =>
    `<h2 class="hr aligncenter" id="${text.replace(/[^a-z0-9]/gi, '-c').toLowerCase()}"><span class="pink">&lt;</span>${text}<span class="pink">&gt;</span></h6>`
  );

  eleventyConfig.addPairedShortcode('info', (text) =>
    `<blockquote class="info-block">${text}</blockquote>`
  );

  eleventyConfig.addPairedShortcode('warning', (text) =>
    `<blockquote class="warning-block">${text}</blockquote>`
  );

  eleventyConfig.addPairedShortcode('twitter', (url) =>
    `<p><a href="{{ url }}" class="tag">Discuss on Twitter &rsaquo;</a></p>`
  );

  return {
    dir: {
      input: "_content",
      output: "_dist"
    },
    templateFormats: [
      'md', 'css', 'html', 'txt', 'ico', 'png', 'jpg', 'gif', 'htaccess', 'pdf', 'toml', 'njk'
    ],
    passthroughFileCopy: true
  };
};

const isPublishedPost = (data) => data.permalink && 'post' === data.layout
