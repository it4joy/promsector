'use strict';

const rssParser = require('rss-parser');
const parser = new rssParser();
const url = 'https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en';

async function getContent(url) {
  let feed = await parser.parseURL(url);

  feed.items.forEach(item => {
    console.log(`${item.title}\n`);
  });
}

getContent(url);


// for testing via Mocha

const checkURL = (url) => {
    return url;
};

module.exports = { checkURL, url };
