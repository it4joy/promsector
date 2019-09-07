const assert = require('assert');
const app = require('../app.js');
const testURLSpecimen = 'https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en';

// test of mocha's functionality

/* it('Must returns \'true\'', () => {
    assert.equal(true, true);
}); */


describe('getContent', function() {
    it('URL\'s must be equal to each other', async function() {
        assert.equal(app.checkURL(app.url), testURLSpecimen);
    });
});
