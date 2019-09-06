'use strict';

const rssParser = require('rss-parser');
const parser = new rssParser();
const url = 'https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en';

(async () => {
  let feed = await parser.parseURL(url);

  feed.items.forEach(item => {
    console.log(`${item.title}\n`);
  });
})();
